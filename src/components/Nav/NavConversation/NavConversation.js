import React from "react";
import "./NavConversation.scss";
import { Avatar } from "../../../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function NavConversation() {
  const reduxUserData = useSelector((state) => state.reduxUserData);
  const reduxConversation = useSelector((state) => state.reduxConversation);

  return (
    <div className="nav-conversation">
      <div className="nav-conversation__title">{`Con(${reduxConversation.length})`}</div>
      {reduxConversation.map((item, i) => {
        return (
          <Link to={`/room/${item.id}`} key={i}>
            <Avatar
              backgroundImage={
                reduxUserData.data.id === item.user.id
                  ? item.user2.urlAvatar
                  : item.user.urlAvatar
              }
              className="nav-conversation__avatar"
              showStatus={true}
              status={
                reduxUserData.data.id === item.user.id
                  ? item.user2.status
                  : item.user.status
              }
            />
          </Link>
        );
      })}
    </div>
  );
}
