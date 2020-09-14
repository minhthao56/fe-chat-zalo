import React, { useEffect } from "react";
import "./ListContact.scss";
import HeaderList from "../Common/HeaderList/HeaderList";
import { doGetAllUser } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { apiConversation } from "../../services";

export default function ListContact() {
  const reduxListUser = useSelector((state) => state.reduxListUser);
  const reduxUserData = useSelector((state) => state.reduxUserData);
  // const reduxConversation = useSelector((state) => state.reduxConversation);
  const dispatch = useDispatch();

  const history = useHistory();

  const handleCreateConversation = (id) => {
    const dataUser = {
      userId: id,
      userId2: reduxUserData.data.id,
    };
    apiConversation.postCreateConversation(dataUser).then((res) => {
      history.push("/");
    });
  };
  useEffect(() => {
    dispatch(doGetAllUser());
  }, [dispatch]);
  return (
    <div className="list-contact">
      <HeaderList title="Your friends" />
      {reduxListUser.map((item, i) => {
        return (
          <div
            className="list-contact__content"
            key={i}
            onClick={() => handleCreateConversation(item.id)}
          >
            <img src={item.urlAvatar} alt="" className="list-contact__img" />
            <div className="list-contact__main">
              <h4 className="list-contact__name">{item.name}</h4>
              <span className="list-contact__email">{item.email}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
