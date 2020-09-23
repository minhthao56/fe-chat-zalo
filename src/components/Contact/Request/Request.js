import React from "react";
import "./Request.scss";
import { Button, Avatar } from "../../index";

export default function Request({
  name,
  content,
  status,
  handleConfirm,
  id,
  urlAvatar,
}) {
  return (
    <div className="request">
      <div className="request__main">
        <Avatar backgroundImage={urlAvatar} className="request__img" />
        <div className="request__content">
          <p className="request__name">{name}</p>
          <p className="request__text">{content}</p>
          <Button type="button" className="request__btn request__btn--chat">
            Chat
          </Button>
        </div>
      </div>
      <div className="request__action">
        <Button className="request__btn request__btn--skip">Skip</Button>
        <Button
          className="request__btn request__btn--confirm"
          onClick={() => handleConfirm(id)}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
}
