import React from "react";
import Select from "react-select";
import "./ModalProfile.scss";
import { X, Edit } from "react-feather";
import { Avatar, Input } from "../../index";

export default function ModalProfile() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="modal-profile">
      <div className="modal-profile__container">
        <div className="modal-profile__header">
          <span className="modal-profile__title">Update Information</span>
          <X className="modal-profile__icon" size={16} />
        </div>
        <div className="modal-profile__main">
          <div
            className="modal-profile__banner"
            style={{ backgroundImage: `url(https://picsum.photos/200)` }}
          ></div>
          <div className="modal-profile__avatar">
            <Avatar
              backgroundImage="https://picsum.photos/200"
              height={90}
              width={90}
            />
            <div className="modal-profile__name">
              <h4 className="modal-profile__subname">Minh Thao</h4>
              <Edit
                className="modal-profile__icon modal-profile__icon--edit"
                size={16}
              />
            </div>
          </div>
          <div className="modal-profile__info">
            <span>Email</span>
            <Input />
            <span>Brith day</span>
            <div style={{ display: "flex" }}>
              <Select options={options} />
              <Select options={options} />
              <Select options={options} />
            </div>

            <div>
              <input type="radio" />
              <input type="radio" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
