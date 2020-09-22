import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

export default function SidebarChat({ addNewChat }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    // Random number 0-1000
    setSeed(Math.floor(Math.random() * 1000));
  }, []);

  const createChat = () => {
    const roomName = window.prompt("Enter the Chat Name:");

    if (roomName) {
      // do
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`} />
      <div className="sidebarChat-info">
        <h2>Room name</h2>
        <p>Last message</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <IconButton>
        <AddIcon />
      </IconButton>
      <h2 className="sidebarChat-add">Add New Chat</h2>
    </div>
  );
}
