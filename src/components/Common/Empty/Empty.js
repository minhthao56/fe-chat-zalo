import React from "react";
import { Slash } from "react-feather";
import "./Empty.scss";

export default function Empty({ title }) {
  return (
    <div className="empty">
      <span className="empty__title">{title}</span>
      <Slash className="empty__icon" size={30} />
    </div>
  );
}
