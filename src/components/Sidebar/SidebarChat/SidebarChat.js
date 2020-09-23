import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import db from "../../../firebase";
import { Link } from "react-router-dom";

export default function SidebarChat({ addNewChat, name, id }) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState("");

  useEffect(() => {
    if (!id) return;
    db.collection("rooms")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [id]);

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
          <p>{messages[0]?.message}</p>
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
