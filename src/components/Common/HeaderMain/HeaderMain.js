import React from "react";
import "./HeaderMain.scss";

export default function HeaderMain() {
  return (
    <div className="header-main">
      <img
        src="https://picsum.photos/200"
        alt=""
        className="header-main__img"
      />
      <div>
        <h3 className="header-main__name">Full Name</h3>
        <span className="header-main__time">Last time</span>
      </div>
    </div>
  );
}
