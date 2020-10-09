import React from "react";
import "./Avatar.scss";

export default function Avatar({
  className,
  height,
  width,
  backgroundImage,
  status,
  showStatus,
}) {
  return (
    <div
      className={`avatar ${className}`}
      style={{
        height: height,
        width: width,
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {showStatus && (
        <div
          className={
            status
              ? "avatar__status "
              : "avatar__status avatar__status--offline"
          }
        ></div>
      )}
    </div>
  );
}
