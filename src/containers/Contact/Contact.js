import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Contact.scss";

import { ListRequest, HeaderMain, ListSendRequest } from "../../components";
import { apiFriends } from "../../services";
import { SUCCESS } from "../../redux/constants";
import { doConfirmRequestFriend } from "../../redux/actions";

export default function Contact() {
  const [dataRequestFriend, setDataRequestFriend] = useState([]);
  const [dataSendRequestFriend, setDataSendRequestFriend] = useState([]);
  const reduxConfirmFriend = useSelector((state) => state.reduxConfirmFriend);
  const reduxUserData = useSelector((state) => state.reduxUserData);
  const dispatch = useDispatch();

  const handleConfirm = (id) => {
    dispatch(doConfirmRequestFriend(id));
  };

  useEffect(() => {
    if (reduxUserData.type === SUCCESS) {
      apiFriends
        .getsRequetsAddFriend(reduxUserData.data.id)
        .then((res) => {
          setDataRequestFriend(res);
        })
        .catch((err) => console.log(err));
      apiFriends
        .getListUserSendRequest(reduxUserData.data.id)
        .then((res) => setDataSendRequestFriend(res))
        .catch((err) => console.log(err));
    }
  }, [reduxUserData.data.id, reduxUserData.type, reduxConfirmFriend]);

  return (
    <div className="contact">
      <HeaderMain />
      <ListRequest
        handleConfirm={handleConfirm}
        dataRequestFriend={dataRequestFriend}
      />
      <ListSendRequest dataSendRequest={dataSendRequestFriend} />
    </div>
  );
}
