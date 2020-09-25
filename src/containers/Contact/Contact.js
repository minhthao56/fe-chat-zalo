import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Contact.scss";

import { ListRequest, HeaderMain, ListSendRequest } from "../../components";
import { SUCCESS } from "../../redux/constants";
import {
  doConfirmRequestFriend,
 
} from "../../redux/actions";

export default function Contact() {
  const reduxListSendReqAddFriend = useSelector(
    (state) => state.reduxListSendReqAddFriend
  );
  const reduxRequestAddFriend = useSelector(
    (state) => state.reduxRequestAddFriend
  );
  const dispatch = useDispatch();

  const handleConfirm = (id) => {
    dispatch(doConfirmRequestFriend(id));
  };


  return (
    <div className="contact">
      <HeaderMain />
      <ListRequest
        handleConfirm={handleConfirm}
        dataRequestFriend={reduxRequestAddFriend}
      />
      <ListSendRequest dataSendRequest={reduxListSendReqAddFriend} />
    </div>
  );
}
