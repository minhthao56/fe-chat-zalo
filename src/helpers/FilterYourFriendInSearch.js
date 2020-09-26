export const FilterYourFriendInSearch = (
  resultSearch,
  fullListFriends,
  userId,
  listFriend
) => {
  const arrUser = [];

  if (listFriend.length) {
    for (const userSearch of resultSearch) {
      for (const userFriend of listFriend) {
        if (
          userSearch.id === userFriend.userId ||
          userSearch.id === userFriend.userIdRequest
        ) {
          const type = { type: 1 };
          const Obj = Object.assign(userSearch, type);
          arrUser.push(Obj);
        } else {
          const type = { type: 2 };
          const Obj = Object.assign(userSearch, type);
          arrUser.push(Obj);
        }
      }
    }
  }
  const arrUser2 = [];
  if (fullListFriends.length) {
    for (const userSearch of resultSearch) {
      for (const userFriend of fullListFriends) {
        if (userSearch.id === userFriend.userId && userFriend.status === "1") {
          const type = { type: 3 };
          const Obj = Object.assign(userSearch, type);
          arrUser2.push(Obj);
        } else if (
          userSearch.id === userFriend.userIdRequest &&
          userFriend.status === "1"
        ) {
          const type = { type: 4 };
          const Obj = Object.assign(userSearch, type);
          arrUser2.push(Obj);
        }
      }
    }
  }

  const concatarrUser = arrUser.concat(arrUser2);
  const filterarrUser = concatarrUser.reduce((acc, current) => {
    const x = acc.find((item) => item.id === current.id);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  // filter user
  if (filterarrUser.length) {
    const filterUserCurrent = filterarrUser.filter((user) => {
      if (user.id === userId) {
        return false;
      } else {
        return true;
      }
    });
    return filterUserCurrent;
  } else {
    const filterUserCurrent = resultSearch.filter((user) => {
      if (user.id === userId) {
        return false;
      } else {
        return true;
      }
    });
    return filterUserCurrent;
  }
};
