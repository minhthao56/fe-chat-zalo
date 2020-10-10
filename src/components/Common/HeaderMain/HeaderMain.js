import React, { useEffect, useState } from "react";
import "./HeaderMain.scss";
import { useSelector } from "react-redux";
import { Avatar } from "../../../components";

const url = "https://www.flaticon.com/svg/static/icons/svg/760/760737.svg";
export default function HeaderMain({ detailRoom, type }) {
  const reduxUserData = useSelector((state) => state.reduxUserData);
  const [dataUser, setDataUser] = useState({});

  useEffect(() => {
    if (detailRoom.id) {
      if (reduxUserData.data.id === detailRoom.userId) {
        setDataUser(detailRoom.user2);
      } else {
        setDataUser(detailRoom.user);
      }
    }
  }, [detailRoom, reduxUserData]);

  return (
    <div className="header-main">
      <Avatar
        backgroundImage={type === 2 ? url : dataUser.urlAvatar}
        showStatus={type === 2 ? false : true}
        status={dataUser.status}
        className="header-main__img"
      />
      <div>
        {type === 2 ? (
          <span> All list friend</span>
        ) : (
          <>
            <h3 className="header-main__name">{dataUser.name}</h3>
            <span className="header-main__time">
              {dataUser.staus ? "Online" : "Offline"}
            </span>
          </>
        )}
      </div>
    </div>
  );
}
