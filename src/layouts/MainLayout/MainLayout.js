import React from "react";
import { Nav, HeaderBar } from "../../components";
import "./MainLayout.scss";
import { SideBar } from "../../containers";

export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Nav />
      <div className="main-layout__container">
        <div className="main-layout__side-bar">
          <div className="main-layout__header-bar">
            <HeaderBar />
          </div>
          <div className="main-layout__content">
            <SideBar />
          </div>
        </div>
        <div className="main-layout__children">{children}</div>
      </div>
    </div>
  );
}
