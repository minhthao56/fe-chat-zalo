import React from "react";
import { Button } from "../../index";
import { Send } from "react-feather";
export default function FormRoom() {
  return (
    <form>
      <input type="text" placeholder="Your messenage" />
      <Button type="submit">
        <Send />
      </Button>
    </form>
  );
}
