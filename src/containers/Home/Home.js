import React, { useEffect } from "react";
import io from "socket.io-client";
let socket;

export default function Home() {
  const ENDPOIN = "http://localhost:3000/";
  useEffect(() => {
    console.log("Home");
    socket = io(ENDPOIN);
    socket.on("msgToClient", (message) => {
      console.log(message);
    });
  });
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
