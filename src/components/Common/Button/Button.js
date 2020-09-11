import React from "react";

export default function Button(
  type,
  title,
  onClick,
  className,
  backgroundColor,
  color
) {
  return (
    <div className={className}>
      <button
        className="btn"
        type={type}
        onClick={onClick}
        style={{ backgroundColor: backgroundColor, color: color }}
      >
        {title}
      </button>
    </div>
  );
}
