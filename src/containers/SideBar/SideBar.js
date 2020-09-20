import React, { useEffect } from "react";
import { ListContact, ListConversation } from "../../components";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { doGetListFriends } from "../../redux/actions";
import { SUCCESS } from "../../redux/constants";

export default function SideBar() {
  const reduxUserData = useSelector((state) => state.reduxUserData);
  const reduxConfirmFriend = useSelector((state) => state.reduxConfirmFriend);

  const location = useLocation();
  const pathName = location.pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    if (reduxUserData.type === SUCCESS) {
      dispatch(doGetListFriends(reduxUserData.data.id));
    }
  }, [dispatch, reduxUserData, reduxConfirmFriend]);

  return (
    <>{pathName === "/contact" ? <ListContact /> : <ListConversation />}</>
  );
}
