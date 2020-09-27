import React from "react";
import { ModalAddFriend, ModalProfile } from "../../components";
import { useSelector } from "react-redux";

export default function Modals() {
  const reduxShowModalAddFriend = useSelector(
    (state) => state.reduxShowModalAddFriend
  );
  const reduxModalUpdateInfo = useSelector(
    (state) => state.reduxModalUpdateInfo
  );
  return (
    <div>
      {reduxShowModalAddFriend.status && (
        <ModalAddFriend id={reduxShowModalAddFriend.id} />
      )}
      {reduxModalUpdateInfo && <ModalProfile />}
    </div>
  );
}
