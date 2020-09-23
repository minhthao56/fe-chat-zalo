import React, { useEffect, useState } from "react";
import { X } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import "./ModalAddFriend.scss";
import { Button, Avatar } from "../../index";
import { doLoseBlur, doLoseModalAddFriend } from "../../../redux/actions";
import { apiUser, apiFriends } from "../../../services";

export default function ModalAddFriend({ id }) {
  const [dataUserWannaAddFriend, setDataUserWannaAddFriend] = useState({});
  const [contentAddFriend, setContentAddFriend] = useState("");
  const reduxUserData = useSelector((state) => state.reduxUserData);
  const dispatch = useDispatch();
  const handleLoseModalAddFriend = () => {
    dispatch(doLoseModalAddFriend());
    dispatch(doLoseBlur());
  };

  const handleSendReqAddFriend = (e) => {
    e.preventDefault();
    const dataAddFriend = {
      userId: id,
      userIdRequest: reduxUserData.data.id,
      content: contentAddFriend,
    };
    apiFriends
      .postAddFriend(dataAddFriend)
      .then((res) => {
        dispatch(doLoseModalAddFriend());
        dispatch(doLoseBlur());
        console.log(res);
        toast.success(
          `Bạn đã gửi yều cầu kết bạn đến ${dataUserWannaAddFriend.name} thành công`
        );
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    apiUser.getOneUser(id).then((res) => setDataUserWannaAddFriend(res));
  }, [id]);
  return (
    <div className="add-friend">
      <div className="add-friend__container">
        <div className="add-friend__header">
          <p className="add-friend__title">Add friend</p>
          <X
            className="add-friend__icon"
            size={16}
            onClick={handleLoseModalAddFriend}
          />
        </div>
        <div className="add-friend__main">
          <div className="add-friend__info">
            <Avatar
              backgroundImage={dataUserWannaAddFriend.urlAvatar}
              className="add-friend__img"
            />

            <p className="add-friend__name">{dataUserWannaAddFriend.name}</p>
            <p className="add-friend__email">{dataUserWannaAddFriend.email}</p>
          </div>
          <form className="add-friend__form" onSubmit={handleSendReqAddFriend}>
            <textarea
              className="add-friend__textarea"
              placeholder="Your messenger..."
              value={contentAddFriend}
              onChange={(e) => setContentAddFriend(e.target.value)}
            />
            <Button className="add-friend__btn" type="submit">
              Add friend
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
