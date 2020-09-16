import React from "react";
import { useParams } from "react-router-dom";
import { HeaderRoom, FormRoom, ContentMessenage } from "../../components";
import "./Room.scss";

export default function Room() {
  const params = useParams();
  return (
    <div className="room">
      <div className="room__header">
        <HeaderRoom />
      </div>
      <div className="room__content">
        <ContentMessenage />
      </div>
      <div className="room__form">
        <FormRoom />
      </div>
    </div>
  );
}
