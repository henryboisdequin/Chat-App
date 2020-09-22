import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import db from "../../../firebase";
import { Link } from "react-router-dom";

export default function SidebarChat({ addNewChat, name, id }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    // Random number 0-1000
    setSeed(Math.floor(Math.random() * 1000));
  }, []);

  const createChat = () => {
    const roomName = window.prompt("Enter the Chat Name:");

    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`} />
        <div className="sidebarChat-info">
          <h2>{name}</h2>
          <p>Last message</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <IconButton>
        <AddIcon />
      </IconButton>
      <h2 className="sidebarChat-add">Add New Chat</h2>
    </div>
  );
}
