export const FilterYourFriendInSearch = (resultSearch, listFriends, userId) => {
  const arrUser = [];
  if (listFriends.length) {
    for (const userSearch of resultSearch) {
      for (const userFriend of listFriends) {
        if (
          userSearch.id === userFriend.userIdRequest ||
          userSearch.id === userFriend.userId
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

  if (listFriends.length) {
    const filterUserCurrent = arrUser.filter((user) => {
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
