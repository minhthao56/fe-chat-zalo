import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageCircle, Book, LogOut } from "react-feather";
import { useDispatch, useSelector } from "react-redux";

import "./Nav.scss";

import MenuProfile from "./MenuProfile/MenuProfile";
import Avatar from "../Common/Avatar/Avatar";
import NavConversation from "./NavConversation/NavConversation";
import NavContact from "./NavContact/NavContact";
import HelperLogOut from "../../helpers/Logout";

import { doGetConversationOfUser, doGetListFriends } from "../../redux/actions";

export default function Nav() {
  const location = useLocation();
  const pathName = location.pathname;
  const reduxUserData = useSelector((state) => state.reduxUserData);
  const reduxDeleteTheater = useSelector((state) => state.reduxDeleteTheater);
  const reduxConfirmFriend = useSelector((state) => state.reduxConfirmFriend);
  const reduxCreateTheater = useSelector((state) => state.reduxCreateTheater);

  const { data } = reduxUserData;
  const dispatch = useDispatch();

  const [isShowMenuProfile, setIsShowMenuProfile] = useState(false);
  const hanldeShowMenuProfile = () => {
    setIsShowMenuProfile(!isShowMenuProfile);
  };

  useEffect(() => {
    if (reduxUserData.data.id) {
      dispatch(doGetConversationOfUser(reduxUserData.data.id));
    }
  }, [dispatch, reduxUserData, reduxDeleteTheater, reduxCreateTheater]);

  useEffect(() => {
    if (reduxUserData.data.id) {
      dispatch(doGetListFriends(reduxUserData.data.id));
    }
  }, [dispatch, reduxUserData, reduxConfirmFriend]);

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

      <div className="nav__list">
        {pathName === "/contact" ? <NavContact /> : <NavConversation />}
      </div>
      <LogOut className="nav__logout" onClick={() => HelperLogOut()} />
    </nav>
  );
}
