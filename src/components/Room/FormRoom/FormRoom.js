import React, { useState } from "react";
import { Button } from "../../index";
import { Send, Smile } from "react-feather";
import "./FormRoom.scss";
import Emoji from "./Emoji";

// import "emoji-mart/css/emoji-mart.css";
// import { Picker } from "emoji-mart";

export default function FormRoom({ handleSendMess }) {
  const [isShowEmoji, setIsShowEmoji] = useState(false);
  const [valueMess, setValueMess] = useState("");

  const handleChangeMess = (e) => {
    const value = e.target.value;
    setValueMess(value);
  };
  const handleSubmitSendMess = (e) => {
    return handleSendMess(e, valueMess, setValueMess);
  };

  return (
    <form className="form-room" onSubmit={handleSubmitSendMess}>
      <div className="form-room__media">
        {isShowEmoji && (
          <Emoji
            setValueMess={setValueMess}
            valueMess={valueMess}
            setIsShowEmoji={setIsShowEmoji}
          />
          // <div className="form-room__emoji" ref={wrapperRef}>
          //   <Picker
          //     set="twitter"
          //     onSelect={(emoji) => setValueMess(valueMess + emoji.native)}
          //     title="Zalo"
          //   />
          // </div>
        )}
        <Smile
          className="form-room__icon"
          onClick={() => setIsShowEmoji(!isShowEmoji)}
        />
      </div>
      <input
        type="text"
        placeholder="Your messenage"
        className="form-room__input"
        onChange={handleChangeMess}
        value={valueMess}
      />
      <Button type="submit" className="form-room__btn">
        <Send size={18} />
      </Button>
    </form>
  );
}
