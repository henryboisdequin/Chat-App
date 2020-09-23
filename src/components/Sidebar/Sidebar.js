import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import SearchOutlined from "@material-ui/icons/Search";
import SidebarChat from "./SidebarChat/SidebarChat";
import "./Sidebar.css";
import db from "../../firebase";
import { useStateValue } from "../../StateProvider";

export default function Sidebar() {
  const [rooms, setRooms] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar src={user?.photoURL} />
        <div className="sidebar-headerRight">
          <h1 className="sidebar-name">Signed In As {user.displayName}</h1>
        </div>
      </div>
      <div className="sidebar-search">
        <div className="sidebar-searchContainer">
          <SearchOutlined />
          <input placeholder="Search for a Chat" type="text" />
        </div>
      </div>
      <div className="sidebar-chats">
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}
