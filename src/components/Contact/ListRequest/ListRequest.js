import React from "react";
import "./ListRequest.scss";
import { HeaderList } from "../../index";
import Request from "../Request/Request";

export default function ListRequest({ handleConfirm, dataRequestFriend }) {
  return (
    <div className="list-request">
      <HeaderList title={`Request add friend (${dataRequestFriend.length})`} />
      {dataRequestFriend.map((req, i) => {
        return (
          <Request
            name={req.userRequest.name}
            content={req.content}
            status={req.status}
            key={i}
            handleConfirm={handleConfirm}
            id={req.id}
            urlAvatar={req.userRequest.urlAvatar}
          />
        );
      })}
    </div>
  );
}
