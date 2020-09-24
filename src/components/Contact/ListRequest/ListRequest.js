import React from "react";
import "./ListRequest.scss";
import { HeaderList, Empty } from "../../index";
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
            urlAvatar={req.urlAvatar}
          />
        );
      })}
      {dataRequestFriend.length === 0 ? (
        <Empty title="No request add friend" />
      ) : null}
    </div>
  );
}
