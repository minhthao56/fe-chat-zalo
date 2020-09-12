import React from "react";
import "./ListContact.scss";
import HeaderList from "../Common/HeaderList/HeaderList";

export default function ListContact() {
  return (
    <div className="list-contact">
      <HeaderList title="Your friends" />
      <div className="list-contact__content">
        <img
          src="https://picsum.photos/200"
          alt=""
          className="list-contact__img"
        />
        <div className="list-contact__main">
          <h4 className="list-contact__name">Minh Thao</h4>
          <span className="list-contact__email">minhthao5648@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
