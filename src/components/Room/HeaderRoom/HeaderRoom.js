import React from "react";
import "./HeaderRoom.scss";

export default function HeaderRoom() {
  return (
    <div className="header-room">
      <img
        src="https://picsum.photos/200"
        alt=""
        className="header-room__img"
      />
      <div>
        <h3 className="header-room__name">Full Name</h3>
        <span className="header-room__time">Last time</span>
      </div>
    </div>
  );
}
