import React from "react";
import Nav from "../../components/Nav/Nav";
import "./MainLayout.scss";

export default function MainLayout({ children }) {
  return (
    <>
      <Nav />
      <div className="main-layout">{children}</div>
    </>
  );
}
