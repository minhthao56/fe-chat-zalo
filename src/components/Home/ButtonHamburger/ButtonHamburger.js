import React from "react";
import "./ButtonHamburger.scss";
import { slide as Menu } from "react-burger-menu";
import { useSelector } from "react-redux";
import { Avatar, ListContact } from "../../../components";
import { MessageCircle, Book } from "react-feather";
import { Link, useLocation } from "react-router-dom";

export default function ButtonHamburger() {
  const reduxUserData = useSelector((state) => state.reduxUserData);
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Menu isOpen={false} right={true} className="drawer">
      <div className="drawer__info" style={{ display: "flex" }}>
        <Avatar
          backgroundImage={reduxUserData.data.urlAvatar}
          className="drawer__avatar"
        />
        <span>{reduxUserData.data.name}</span>
      </div>
      <ul className="drawer__ul">
        <Link to="/" className="drawer__link">
          <li
            className={
              pathname === "/" ? "drawer__li drawer__li--active" : "drawer__li"
            }
          >
            <MessageCircle className="drawer__icon" />
            <span>Conversation</span>
          </li>
        </Link>
        <Link to="/contact" className="drawer__link">
          <li
            className={
              pathname === "/contact"
                ? "drawer__li drawer__li--active"
                : "drawer__li"
            }
          >
            <Book className="drawer__icon" />
            <span>Friends</span>
          </li>
        </Link>
      </ul>
      <div>
        <ListContact />
      </div>
    </Menu>
  );
}
