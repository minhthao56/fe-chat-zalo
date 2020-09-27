import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageCircle, Book, LogOut } from "react-feather";
import { useSelector } from "react-redux";

import "./Nav.scss";

import MenuProfile from "./MenuProfile/MenuProfile";
import Avatar from "../Common/Avatar/Avatar";
import HelperLogOut from "../../helpers/Logout";

export default function Nav() {
  const location = useLocation();
  const pathName = location.pathname;
  const reduxUserData = useSelector((state) => state.reduxUserData);
  const { data } = reduxUserData;

  const [isShowMenuProfile, setIsShowMenuProfile] = useState(false);
  const hanldeShowMenuProfile = () => {
    setIsShowMenuProfile(!isShowMenuProfile);
  };
  return (
    <nav className="nav">
      <div className="nav__profile" onClick={hanldeShowMenuProfile}>
        <Avatar backgroundImage={data.urlAvatar} className="nav__avatar" />

        {isShowMenuProfile && (
          <MenuProfile setIsShowMenuProfile={setIsShowMenuProfile} />
        )}
      </div>
      <ul className="nav__ul">
        <Link to="/" className="nav__link">
          <li
            className={pathName === "/" ? "nav__li nav__li--choose" : "nav__li"}
          >
            <MessageCircle />
          </li>
        </Link>
        <Link to="/contact" className="nav__link">
          <li
            className={
              pathName === "/contact" ? "nav__li nav__li--choose" : "nav__li"
            }
          >
            <Book />
          </li>
        </Link>
      </ul>
      <LogOut className="nav__logout" onClick={() => HelperLogOut()} />
    </nav>
  );
}
