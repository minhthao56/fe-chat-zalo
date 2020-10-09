import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HeaderMain, FormRoom, ContentMessenage } from "../../components";
import "./Room.scss";
import io from "socket.io-client";
import { useSelector } from "react-redux";
import { apiConversation, apiNotification } from "../../services";

let socket;
export default function Room() {
  const reduxUserData = useSelector((state) => state.reduxUserData);

  const [messenages, setMessages] = useState([]);
  const [detailRoom, setDetailRoom] = useState({});

  const params = useParams();
  const ENDPOIN = "http://localhost:3000/chat";

  useEffect(() => {
    socket = io(ENDPOIN);
    if (params.id) {
      socket.emit("join", { ...params });
      console.log("join");
    }
    apiConversation
      .getAllMessOfConversation(params.id)
      .then((res) => setMessages(res));
    return () => {
      socket.off();
    };
  }, [ENDPOIN, params]);

  useEffect(() => {
    socket.on("mess", (mess) => {
      setMessages([...messenages, mess]);
    });
  }, [messenages]);

  useEffect(() => {
    apiConversation
      .getDetailTheater(params.id)
      .then((res) => setDetailRoom(res))
      .catch((err) => console.log(err));
  }, [params.id]);

  const handleSendMess = (e, valueMess, setValueMess) => {
    e.preventDefault();
    socket.emit("sendMess", {
      userId: reduxUserData.data.id,
      content: valueMess,
      theaterId: params.id,
    });

    socket.emit("typing", {
      statusTyping: false,
    });

    const dataSendNotify = {
      userIdRevice:
        reduxUserData.data.id === detailRoom.userId
          ? detailRoom.userId2
          : detailRoom.userId,
      content: valueMess,
      userIdSender:
        reduxUserData.data.id === detailRoom.userId
          ? detailRoom.userId
          : detailRoom.userId2,
    };
    apiNotification
      .postSendNotification(dataSendNotify)
      .then((res) => setValueMess(""))
      .catch((err) => console.log(err));
  };

  const handleTypingMes = (value) => {
    console.log(value);
    if (value) {
      socket.emit("typing", {
        statusTyping: true,
      });
    } else {
      socket.emit("typing", {
        statusTyping: false,
      });
    }
  };

  useEffect(() => {
    if (document.hasFocus) {
      console.log("focus in ReactJS");
    }
  }, [params]);

  return (
    <div className="room">
      <div className="room__header">
        <HeaderMain />
      </div>

      <ContentMessenage
        messenages={messenages}
        userId={reduxUserData.data.id}
      />

      <div className="room__form">
        <FormRoom
          handleSendMess={handleSendMess}
          handleTypingMes={handleTypingMes}
        />
      </div>
    </div>
  );
}
