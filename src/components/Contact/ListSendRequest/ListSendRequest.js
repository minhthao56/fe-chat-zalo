import React from "react";
import "./ListSendRequest.scss";
import { HeaderList, Empty } from "../../index";
import Request from "../Request/Request";

export default function ListSendRequest({ dataSendRequest }) {
  return (
    <div className="send-request">
      <HeaderList title={`Send Request (${dataSendRequest.length})`} />
      {dataSendRequest.map((user, i) => {
        return (
          <Request
            name={user.user.name}
            urlAvatar={user.user.urlAvatar}
            key={i}
            type={2}
            email={user.user.email}
          />
        );
      })}
      {dataSendRequest.length === 0 ? (
        <Empty title="No any request is send" />
      ) : null}
    </div>
  );
}
