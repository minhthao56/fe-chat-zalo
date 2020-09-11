import React from "react";
import "./Button.scss";

export default function Button({
  type,
  children,
  onClick,

  backgroundColor,
  color,
}) {
  return (
    
      <button
        className="btn"
        type={type}
        onClick={onClick}
        style={{ backgroundColor: backgroundColor, color: color }}
      >
        {children}
      </button>
    
  );
}
