import React from "react";
import { ListContact, ListConversation } from "../../components";
import { useLocation } from "react-router-dom";

export default function SideBar() {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <>{pathName === "/contact" ? <ListContact /> : <ListConversation />}</>
  );
}
