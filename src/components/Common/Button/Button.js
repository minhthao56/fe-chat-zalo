import React from "react";
import "./Button.scss";

export default function Button({
  type,
  children,
  onClick,
  backgroundColor,
  color,
  borderRadius,
  height,
  width,
}) {
  return (
    <button
      className="btn"
      type={type}
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor,
        color: color,
        height: height,
        width: width,
        borderRadius: borderRadius,
      }}
    >
      {children}
    </button>
  );
}
