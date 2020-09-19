import React, { useEffect } from "react";
import "./ListContact.scss";
import HeaderList from "../Common/HeaderList/HeaderList";
import { doGetListFriends } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { apiConversation } from "../../services";
import { SUCCESS } from "../../redux/constants";

export default function ListContact() {
  const reduxUserData = useSelector((state) => state.reduxUserData);
  const reduxListFriend = useSelector((state) => state.reduxListFriend);
  const reduxConfirmFriend = useSelector((state) => state.reduxConfirmFriend);
  const dispatch = useDispatch();

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
  useEffect(() => {
    if (reduxUserData.type === SUCCESS) {
      dispatch(doGetListFriends(reduxUserData.data.id));
    }
  }, [reduxUserData.data.id, dispatch, reduxUserData.type, reduxConfirmFriend]);

  return (
    <div className="list-contact">
      <HeaderList title="Your friends" />
      {reduxListFriend.map((item, i) => {
        return (
          <div
            className="list-contact__content"
            key={i}
            onClick={() => handleCreateConversation(item.userRequest.id)}
          >
            <img
              src={item.userRequest.urlAvatar}
              alt=""
              className="list-contact__img"
            />
            <div className="list-contact__main">
              <p className="list-contact__name">{item.userRequest.name}</p>
              <span className="list-contact__email">
                {item.userRequest.email}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
