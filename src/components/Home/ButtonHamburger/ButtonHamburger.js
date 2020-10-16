import React from "react";
import "./ButtonHamburger.scss";
import { Menu } from "react-feather";

export default function ButtonHamburger() {
  return (
    <div className="button-hamburger">
      <button className="button-hamburger__btn">
        <Menu />
      </button>
    </div>
  );
}
