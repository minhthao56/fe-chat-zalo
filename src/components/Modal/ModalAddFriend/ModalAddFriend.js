import React, { useEffect, useState } from "react";
import { X } from "react-feather";
import { useDispatch } from "react-redux";

import "./ModalAddFriend.scss";
import { Button } from "../../index";
import { doLoseBlur, doLoseModalAddFriend } from "../../../redux/actions";
import { apiUser } from "../../../services";

export default function ModalAddFriend({ id }) {
  const [dataUserWannaAddFriend, setDataUserWannaAddFriend] = useState({});
  const dispatch = useDispatch();
  const handleLoseModalAddFriend = () => {
    dispatch(doLoseModalAddFriend());
    dispatch(doLoseBlur());
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
            <img
              src="https://picsum.photos/200"
              alt=""
              className="add-friend__img"
            />

            <p className="add-friend__name">{dataUserWannaAddFriend.name}</p>
            <p className="add-friend__email">{dataUserWannaAddFriend.email}</p>
          </div>
          <form className="add-friend__form">
            <textarea
              className="add-friend__textarea"
              placeholder="Your messenger..."
            />
            <Button className="add-friend__btn">Add friend</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
