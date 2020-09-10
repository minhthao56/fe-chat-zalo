import React from "react";
import Nav from "../../components/Nav/Nav";

export default function MainLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
