import React, { useEffect } from "react";
import "./ListConversation.scss";
import HeaderList from "../Common/HeaderList/HeaderList";
import { useDispatch, useSelector } from "react-redux";
import { doGetConversationOfUser } from "../../redux/actions";
import {SUCCESS} from "../../redux/constants"
import { Link } from "react-router-dom";

export default function ListConversation() {
  const reduxConversation = useSelector((state) => state.reduxConversation);
  const reduxUserData = useSelector((state) => state.reduxUserData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (reduxUserData.type === SUCCESS){
      dispatch(doGetConversationOfUser(reduxUserData.data.id));
    }
  }, [reduxUserData.data.id, dispatch,reduxUserData.type,reduxUserData ]);

  return (
    <div className="conversation">
      <HeaderList title="Conversation" />
      {reduxConversation.map((item, i) => {
        return (
          <Link to={`/room/${item.id}`} className="conversation__link" key={i}>
            <div className="conversation__container" >
              <div className="conversation__content">
                <img
                  src={
                    reduxUserData.data.id === item.user.id
                      ? item.user.urlAvatar
                      : item.user2.urlAvatar
                  }
                  alt=""
                  className="conversation__img"
                />
                <div className="conversation__main">
                  <h4 className="conversation__name">
                    {reduxUserData.data.id === item.user.id
                      ? item.user2.name
                      : item.user.name}
                  </h4>
                  <span className="conversation__mess">Last Messeage</span>
                </div>
              </div>
              <span className="conversation__time">Yesterday</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
