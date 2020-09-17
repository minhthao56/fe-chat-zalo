import React from "react";
import "./ContentMessenage.scss";

export default function ContentMassenage({ messenages, userId }) {
  console.log(messenages);
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
              <p className="content-massenage__time">10:00 pm</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
