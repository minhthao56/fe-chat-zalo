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
  const [isTyping, setIsTying] = useState(false);

  const params = useParams();
  const ENDPOIN = "http://localhost:3000/chat";

  useEffect(() => {
    socket = io(ENDPOIN);
    if (params.id) {
      socket.emit("join", { ...params });
    }
    apiConversation
      .getAllMessOfConversation(params.id)
      .then((res) => setMessages(res));

    return () => {
      socket.off();
    };
  }, [params]);

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

  useEffect(() => {
    socket.on("typeStatus", (mess) => {
      if (reduxUserData.data.id !== mess.userId) {
        setIsTying(mess.statusTyping);
      }
    });
  }, []);

  const handleSendMess = (e, valueMess, setValueMess) => {
    e.preventDefault();
    socket.emit("sendMess", {
      userId: reduxUserData.data.id,
      content: valueMess,
      theaterId: params.id,
    });

    socket.emit("typing", {
      userId: reduxUserData.data.id,
      statusTyping: false,
      theaterId: params.id,
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
    if (value) {
      socket.emit("typing", {
        userId: reduxUserData.data.id,
        statusTyping: true,
        theaterId: params.id,
      });
    } else {
      socket.emit("typing", {
        userId: reduxUserData.data.id,
        statusTyping: false,
        theaterId: params.id,
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
        <HeaderMain detailRoom = {detailRoom} />
      </div>

      <ContentMessenage
        messenages={messenages}
        userId={reduxUserData.data.id}
      />
      {isTyping && <span className="room__typing">Typing...</span>}
      <div className="room__form">
        <FormRoom
          handleSendMess={handleSendMess}
          handleTypingMes={handleTypingMes}
        />
      </div>
    </div>
  );
}
