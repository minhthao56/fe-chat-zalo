import React from "react";
import "./ResultSearch.scss";
import { Empty } from "../../index";

export default function ResultSearch({ dataSearchFilter, handleAddFriend }) {
  return (
    <div className="result-search">
      <p className="result-search__title">Result search</p>
      <div className="result-search__container">
        {dataSearchFilter.map((user, i) => {
          return (
            <div className="result-search__list" key={i}>
              <div className="result-search__info">
                <img
                  src="https://picsum.photos/200"
                  alt=""
                  className="result-search__img"
                />
                <div>
                  <p className="result-search__name">{user.name}</p>
                  <p className="result-search__email">{user.email}</p>
                </div>
              </div>
              {user.type === 1 ? (
                <span className="result-search__friend">Your friend</span>
              ) : (
                <button
                  className="result-search__btn"
                  onClick={() => handleAddFriend(user.id)}
                  type="button"
                >
                  Add friend
                </button>
              )}
            </div>
          );
        })}
        {dataSearchFilter.length ? null : <Empty title="Not found" />}
      </div>
    </div>
  );
}
