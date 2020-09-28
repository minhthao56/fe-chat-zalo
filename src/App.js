import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";

import "./App.scss";

import Routers from "./routers";
import { Modals } from "./containers";

let socket;

export default function App() {
  const reduxShowBlur = useSelector((state) => state.reduxShowBlur);
  const reduxUserData = useSelector((state) => state.reduxUserData);
  const ENDPOIN = "http://localhost:3000/notification";

  useEffect(() => {
    socket = io(ENDPOIN);
    if (reduxUserData.data.id) {
      socket.emit("joinNoti", { userId: reduxUserData.data.id });
    }
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOIN, reduxUserData.data.id]);

  useEffect(() => {
    socket.on("messNotify", (mess) => {
      console.log(mess);
    });
    console.log("messNotify");
  }, []);

  return (
    <div>
      <div>
        <Modals />
      </div>
      <div id={reduxShowBlur ? "app-blur" : null}>
        <Routers />
      </div>
    </div>
  );
}
