import React from "react";
import { ModalAddFriend } from "../../components";
import { useSelector } from "react-redux";

export default function Modals() {
  const reduxShowModalAddFriend = useSelector(
    (state) => state.reduxShowModalAddFriend
  );
  return (
    <div>
      {reduxShowModalAddFriend.status && (
        <ModalAddFriend id={reduxShowModalAddFriend.id} />
      )}
    </div>
  );
}
