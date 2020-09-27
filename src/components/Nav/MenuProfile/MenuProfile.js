import React, { useRef, useEffect } from "react";
import "./MenuProfile.scss";
import { Edit, LogOut } from "react-feather";
import { doShowUpdateInfo, doShowBlur } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import HelperLogOut from "../../../helpers/Logout";

export default function MenuProfile({ setIsShowMenuProfile }) {
  const wrapperRef = useRef(null);
  const dispatch = useDispatch();
  const handShowUpdateInfo = () => {
    dispatch(doShowUpdateInfo());
    dispatch(doShowBlur());
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsShowMenuProfile(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div className="menu-profile" ref={wrapperRef}>
      <ul className="menu-profile__menu">
        <li className="menu-profile__list" onClick={handShowUpdateInfo}>
          <Edit className="menu-profile__icon" /> Cập nhật thông tin
        </li>
        <li className="menu-profile__list" onClick={() => HelperLogOut()}>
          <LogOut className="menu-profile__icon" />
          Đăng xuất
        </li>
      </ul>
    </div>
  );
}
