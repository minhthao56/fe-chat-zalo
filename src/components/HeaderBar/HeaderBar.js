import React from "react";
import "./HeaderBar.scss";
import { Search } from "react-feather";

export default function HeaderBar() {
  return (
    <div className="header-bar">
      <h4 className="header-bar__name">Zalo - Minh Thao</h4>
      <form className="header-bar__form">
        <input className="header-bar__input" placeholder="Search..." />
        <button className="header-bar__btn">
          <Search className="header-bar__icon" />
        </button>
      </form>
    </div>
  );
}
