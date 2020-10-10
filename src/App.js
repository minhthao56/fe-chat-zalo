import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import { toast } from "react-toastify";

import "./App.scss";

import Routers from "./routers";
import { Modals } from "./containers";

// let socket;

export default function App() {
  const reduxShowBlur = useSelector((state) => state.reduxShowBlur);
  const token = localStorage.getItem("token");

  useEffect(() => {
    var socket = io("/notification", {
      transportOptions: {
        polling: {
          extraHeaders: {
            Authorization: `Bearer ${token}`,
          },
        },
      },
    });
    socket.emit("joinNoti");

    socket.on("messNotify", (mes) => {
      if (mes) {
        toast(`${mes.userSender.name} send ${mes.content} for you`);
      }
    });
    console.log("App");

    return () => {
      socket.off();
    };
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
