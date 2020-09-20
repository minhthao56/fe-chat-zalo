import React from "react";
import "./ModalAddFriend.scss";
import { Button } from "../../index";
import { X } from "react-feather";

export default function ModalAddFriend() {
  return (
    <div className="add-friend">
      <div className="add-friend__container">
        <div className="add-friend__header">
          <p className="add-friend__title">Add friend</p>
          <X className="add-friend__icon" size={16} />
        </div>
        <div className="add-friend__main">
          <div className="add-friend__info">
            <img
              src="https://picsum.photos/200"
              alt=""
              className="add-friend__img"
            />

            <p className="add-friend__name">Name</p>
            <p className="add-friend__email">name@gmail.com</p>
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
