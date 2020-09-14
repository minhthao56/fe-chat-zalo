import React, { useEffect } from "react";
import "./ListConversation.scss";
import HeaderList from "../Common/HeaderList/HeaderList";
import { useDispatch, useSelector } from "react-redux";
import { doGetConversationOfUser } from "../../redux/actions";

export default function ListConversation() {
  const reduxConversation = useSelector((state) => state.reduxConversation);
  const reduxUserData = useSelector((state) => state.reduxUserData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(doGetConversationOfUser(reduxUserData.data.id));
  }, [reduxUserData.data.id, dispatch]);

  return (
    <div className="conversation">
      <HeaderList title="Conversation" />
      {reduxConversation.map((item, i) => {
        return (
          <div className="conversation__container" key={i}>
            <div className="conversation__content">
              <img
                src={item.user.urlAvatar}
                alt=""
                className="conversation__img"
              />
              <div className="conversation__main">
                <h4 className="conversation__name">{item.user.name}</h4>
                <span className="conversation__mess">Last Messeage</span>
              </div>
            </div>
            <span className="conversation__time">Yesterday</span>
          </div>
        );
      })}
    </div>
  );
}
