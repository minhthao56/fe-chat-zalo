import React from "react";
import "./ResultSearch.scss";
import { Empty, Avatar } from "../../index";
import { useHistory } from "react-router-dom";

export default function ResultSearch({ dataSearchFilter, handleAddFriend }) {
  const history = useHistory();
  const handleFriend = () => {
    history.push("/contact");
  };
  return (
    <div className="result-search">
      <p className="result-search__title">Result search</p>
      <div className="result-search__container">
        {dataSearchFilter.map((user, i) => {
          return (
            <div className="result-search__list" key={i}>
              <div className="result-search__info">
                <Avatar
                  backgroundImage={user.urlAvatar}
                  height={38}
                  width={38}
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
              ) : user.type === 3 ? (
                <span className="result-search__friend">Waitting comfirm</span>
              ) : user.type === 4 ? (
                <div className="result-search__action">
                  <button
                    onClick={handleFriend}
                    className="result-search__btn result-search__btn--skip"
                  >
                    Skip
                  </button>
                  <button className="result-search__btn" onClick={handleFriend}>
                    Comfirm
                  </button>
                </div>
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
