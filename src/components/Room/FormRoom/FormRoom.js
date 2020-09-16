import React from "react";
import { Button } from "../../index";
import { Send } from "react-feather";
import "./FormRoom.scss";

export default function FormRoom() {
  return (
    <form className="form-room">
      <input
        type="text"
        placeholder="Your messenage"
        className="form-room__input"
      />
      <Button type="submit" className="form-room__btn">
        <Send size={18} />
      </Button>
    </form>
  );
}
