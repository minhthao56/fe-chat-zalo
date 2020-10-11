import React, { useEffect } from "react";
import "./ContentMessenage.scss";
import Moment from "react-moment";
import ScrollToBottom from "react-scroll-to-bottom";

export default function ContentMassenage({
  messenages,
  userId,
  handleSeeMore,
  isLoading,
}) {
  return (
    <ScrollToBottom className="massenage-scroll">
      {isLoading ? (
        <div className="massenage-scroll__more">Loading...</div>
      ) : (
        <div className="massenage-scroll__more" onClick={() => handleSeeMore()}>
          See more 10 messenages
        </div>
      )}

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
    </ScrollToBottom>
  );
}
