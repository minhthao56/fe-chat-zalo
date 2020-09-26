import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Contact.scss";

import { ListRequest, HeaderMain, ListSendRequest } from "../../components";
import { SUCCESS } from "../../redux/constants";
import {
  doConfirmRequestFriend,
  doListRequestAddFriend,
  doListSendRequestAddFriend,
} from "../../redux/actions";

export default function Contact() {
  const reduxConfirmFriend = useSelector((state) => state.reduxConfirmFriend);
  const reduxUserData = useSelector((state) => state.reduxUserData);
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

  useEffect(() => {
    if (reduxUserData.type === SUCCESS) {
      dispatch(doListSendRequestAddFriend(reduxUserData.data.id));
      dispatch(doListRequestAddFriend(reduxUserData.data.id));
    }
  }, [reduxUserData, reduxConfirmFriend, dispatch]);

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
