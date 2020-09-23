import React from "react";
import "./Avatar.scss";

export default function Avatar({ className, height, width, backgroundImage }) {
  return (
    <div
      className={`avatar ${className}`}
      style={{
        height: height,
        width: width,
        backgroundImage: `url(${backgroundImage})`,
      }}
    ></div>
  );
}
