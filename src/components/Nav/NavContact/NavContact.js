import React from "react";
import "./NavContact.scss";
import { Avatar } from "../../../components";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { apiConversation } from "../../../services";

export default function NavContact() {
  const reduxListFriend = useSelector((state) => state.reduxListFriend);
  const reduxUserData = useSelector((state) => state.reduxUserData);
  const history = useHistory();

  const handleCreateConversation = (id) => {
    const dataUser = {
      userId: id,
      userId2: reduxUserData.data.id,
    };
    apiConversation
      .postCreateConversation(dataUser)
      .then((res) => {
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="nav-contact">
      <div className="nav-contact__title">{`Friend(${0})`}</div>
      {reduxListFriend.map((item, i) => {
        return (
          <div
            key={i}
            onClick={() =>
              handleCreateConversation(
                reduxUserData.data.id === item.userRequest.id
                  ? item.user.id
                  : item.userRequest.id
              )
            }
            className="nav-contact__one"
          >
            <Avatar
              backgroundImage={
                reduxUserData.data.id === item.userRequest.id
                  ? item.user.urlAvatar
                  : item.userRequest.urlAvatar
              }
              showStatus={true}
              status={
                reduxUserData.data.id === item.userRequest.id
                  ? item.user.status
                  : item.userRequest.status
              }
              className="nav-contact__avatar"
            />
          </div>
        );
      })}
    </div>
  );
}
