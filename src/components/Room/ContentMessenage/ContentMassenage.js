import React, { useEffect, useRef } from "react";
import "./ContentMessenage.scss";
import Moment from "react-moment";

export default function ContentMassenage({ messenages, userId }) {
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messenages]);
  return (
    <>
      {messenages.map((mes, i) => {
        return (
          <div
            className={
              userId === mes.userId
                ? "content-massenage content-massenage--user"
                : "content-massenage"
            }
            key={i}
          >
            <img
              src="https://picsum.photos/200"
              alt=""
              className={
                userId === mes.userId
                  ? "content-massenage__img content-massenage__img--user"
                  : "content-massenage__img"
              }
            />
            <div
              className={
                userId === mes.userId
                  ? "content-massenage__main content-massenage__main--user"
                  : "content-massenage__main"
              }
            >
              <p className="content-massenage__name">{mes.__user__.name}</p>
              <p className="content-massenage__content">{mes.content}</p>
              <p className="content-massenage__time">
                <Moment fromNow>{new Date(mes.createAt)}</Moment>{" "}
              </p>
            </div>
          </div>
        );
      })}
      <div ref={messagesEndRef} />
    </>
  );
}
