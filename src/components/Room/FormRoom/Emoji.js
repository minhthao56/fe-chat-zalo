import React, { useEffect, useRef } from "react";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import "./FormRoom.scss";

export default function Emoji({ setValueMess, valueMess, setIsShowEmoji }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsShowEmoji(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div className="form-room__emoji" ref={wrapperRef}>
      <Picker
        set="twitter"
        onSelect={(emoji) => setValueMess(valueMess + emoji.native)}
        title=""
        emoji=""
      />
    </div>
  );
}
