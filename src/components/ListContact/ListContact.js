import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "./ListContact.scss";
import HeaderList from "../Common/HeaderList/HeaderList";
import Avatar from "../Common/Avatar/Avatar";
import { doCreateTheater } from "../../redux/actions";

export default function ListContact() {
  const reduxListFriend = useSelector((state) => state.reduxListFriend);
  const reduxUserData = useSelector((state) => state.reduxUserData);
  const reduxCreateTheater = useSelector((state) => state.reduxCreateTheater);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleCreateConversation = (id) => {
    const dataUser = {
      userId: id,
      userId2: reduxUserData.data.id,
    };
    dispatch(doCreateTheater(dataUser));
  };

  useEffect(() => {
    if (reduxCreateTheater.id) {
      history.push(`/room/${reduxCreateTheater.id}`);
    }
    console.log(reduxCreateTheater.id);
  }, [reduxCreateTheater]);

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
            <Avatar
              backgroundImage={
                reduxUserData.data.id === item.userRequest.id
                  ? item.user.urlAvatar
                  : item.userRequest.urlAvatar
              }
              className="list-contact__img"
              showStatus={true}
              status={
                reduxUserData.data.id === item.userRequest.id
                  ? item.user.status
                  : item.userRequest.status
              }
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
