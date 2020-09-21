import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";

export default function SidebarChat() {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    // Random number
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`} />
      <div className="sidebarChat-info">
        <h2>Room name</h2>
        <p>Last message</p>
      </div>
    </div>
  );
}
