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
    socket.emit("join", { ...params });
    apiConversation
      .getAllMessOfConversation(params.id)
      .then((res) => setMessages(res));
    return () => {
      socket.emit("disconnect");
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

  const handleSendMess = (values, resetForm) => {
    socket.emit("sendMess", {
      userId: reduxUserData.data.id,
      content: values.mes,
      theaterId: params.id,
    });

    const dataSendNotify = {
      userIdRevice:
        reduxUserData.data.id === detailRoom.userId
          ? detailRoom.userId2
          : detailRoom.userId,
      content: values.mes,
    };
    console.log(detailRoom.userId);
    console.log(reduxUserData.data.id);
    console.log(dataSendNotify);

    // apiNotification
    //   .postSendNotification(dataSendNotify)
    //   .then((res) => console.log())
    //   .catch((err) => console.log(err));
    socket.emit("messageNotify", {
      userIdRevice:
        reduxUserData.data.id === detailRoom.userId
          ? detailRoom.userId2
          : detailRoom.userId,
      content: values.mes,
    });
    resetForm();
  };

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
        <FormRoom handleSendMess={handleSendMess} />
      </div>
    </div>
  );
}
