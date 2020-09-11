import React from "react";
import "./Input.scss";

export default function Input({
  onChange,
  type,
  placeholder,
  name,
  id,
  value,
  onBlur,
  error,
  borderColorErr,
  icon,
  marginBottom,
}) {
  return (
    <div className="input" style={{ marginBottom: marginBottom }}>
      <div className="input__main" style={{ borderColor: borderColorErr }}>
        {icon}
        <input
          className="input__input"
          type={type}
          placeholder={placeholder}
          name={name}
          id={id}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
        />
      </div>
      <div className="input__error">{error}</div>
    </div>
  );
}
