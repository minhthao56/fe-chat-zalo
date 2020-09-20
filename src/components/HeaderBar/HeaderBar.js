import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Search } from "react-feather";

import "./HeaderBar.scss";

import ResultSearch from "./ResultSearch/ResultSearch";
import { doSearchFriend } from "../../redux/actions";
import { FilterYourFriendInSearch } from "../../helpers/FilterYourFriendInSearch";

export default function HeaderBar() {
  const reduxUserData = useSelector((state) => state.reduxUserData);
  const reduxSearchFriend = useSelector((state) => state.reduxSearchFriend);
  const reduxListFriend = useSelector((state) => state.reduxListFriend);

  const [isShowReultSearch, setIsShowReultSearch] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const [dataSearchFilter, setDataSearchFilter] = useState([]);

  const dispatch = useDispatch();

  const hanldChangeValueSearch = (e) => {
    const value = e.target.value;
    setValueSearch(value);
    dispatch(doSearchFriend({ q: value }));

    if (value) {
      setIsShowReultSearch(true);
    } else {
      setIsShowReultSearch(false);
    }
  };

  const handleAddFriend = (id) => {
    console.log(id);
  };

  useEffect(() => {
    const dataFilter = FilterYourFriendInSearch(
      reduxSearchFriend,
      reduxListFriend,
      reduxUserData.data.id
    );

    setDataSearchFilter(dataFilter);
  }, [reduxListFriend, reduxSearchFriend, reduxUserData]);

  return (
    <div className="header-bar">
      <h4 className="header-bar__name">Zalo - {reduxUserData.data.name}</h4>
      <form className="header-bar__form">
        <input
          className="header-bar__input"
          placeholder="Type name or email..."
          value={valueSearch}
          onChange={hanldChangeValueSearch}
        />
        <button type="button" className="header-bar__btn">
          <Search className="header-bar__icon" />
        </button>
        {isShowReultSearch && (
          <ResultSearch
            dataSearchFilter={dataSearchFilter}
            handleAddFriend={handleAddFriend}
          />
        )}
      </form>
    </div>
  );
}
