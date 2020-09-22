import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "./ListContact.scss";
import HeaderList from "../Common/HeaderList/HeaderList";
import { apiConversation } from "../../services";

export default function ListContact() {
  const reduxListFriend = useSelector((state) => state.reduxListFriend);
  const reduxUserData = useSelector((state) => state.reduxUserData);

  const history = useHistory();

  const handleCreateConversation = (id) => {
    const dataUser = {
      userId: id,
      userId2: reduxUserData.data.id,
    };
    apiConversation.postCreateConversation(dataUser).then((res) => {
      history.push("/");
    });
  };

  return (
    <div className="list-contact">
      <HeaderList title={` Your friends (${reduxListFriend.length})`} />
      {reduxListFriend.map((item, i) => {
        return (
          <div
            className="list-contact__content"
            key={i}
            onClick={() =>
              handleCreateConversation(
                reduxUserData.data.id === item.userRequest.id
                  ? item.user.id
                  : item.userRequest.id
              )
            }
          >
            <img
              src={
                reduxUserData.data.id === item.userRequest.id
                  ? item.user.urlAvatar
                  : item.userRequest.urlAvatar
              }
              alt=""
              className="list-contact__img"
            />
            <div className="list-contact__main">
              <p className="list-contact__name">
                {reduxUserData.data.id === item.userRequest.id
                  ? item.user.name
                  : item.userRequest.name}
              </p>
              <span className="list-contact__email">
                {reduxUserData.data.id === item.userRequest.id
                  ? item.user.email
                  : item.userRequest.email}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
