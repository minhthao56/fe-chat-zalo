import React from "react";
import "./MenuProfile.scss";
import { Edit, LogOut } from "react-feather";

export default function MenuProfile() {
  return (
    <div className="menu-profile">
      <ul className="menu-profile__menu">
        <li className="menu-profile__list">
          <Edit className="menu-profile__icon" /> Cập nhật thông tin
        </li>
        <li className="menu-profile__list">
          <LogOut className="menu-profile__icon" /> Đăng xuất
        </li>
      </ul>
    </div>
  );
}
