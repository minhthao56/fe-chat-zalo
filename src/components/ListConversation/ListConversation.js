import React from "react";
import "./ListConversation.scss";
import HeaderList from "../Common/HeaderList/HeaderList";

export default function ListConversation() {
  return (
    <div className="conversation">
      <HeaderList title="Conversation" />
      <div className="conversation__container">
        <div className="conversation__content">
          <img
            src="https://picsum.photos/200"
            alt=""
            className="conversation__img"
          />
          <div className="conversation__main">
            <h4 className="conversation__name">Minh Thao</h4>
            <span className="conversation__mess">Last Messeage</span>
          </div>
        </div>
        <span className="conversation__time">Yesterday</span>
      </div>
    </div>
  );
}
