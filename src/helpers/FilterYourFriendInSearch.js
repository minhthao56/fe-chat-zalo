export const FilterYourFriendInSearch = (
  resultSearch,
  listFriends,
  userId,
  listReqFriend,
  listSendReqFriend
) => {
  const arrUser = [];
  // filter friend
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
  // //filter req
  // if (arrUser.length) {
  //   for (const user of arrUser) {
  //     for (const reqFriend of listReqFriend) {
  //       if (user.id === reqFriend.userIdRequest) {
  //         const type = { type: 3 };
  //         const Obj = Object.assign(user, type);
  //         arrUser.push(Obj);
  //       }
  //     }
  //   }
  // } else {
  //   for (const user of resultSearch) {
  //     for (const reqFriend of listReqFriend) {
  //       if (user.id === reqFriend.userIdRequest) {
  //         const type = { type: 3 };
  //         const Obj = Object.assign(user, type);
  //         arrUser.push(Obj);
  //       }
  //     }
  //   }
  // }

  // // list send req
  // if (arrUser.length) {
  //   for (const user of arrUser) {
  //     for (const reqFriend of listSendReqFriend) {
  //       if (user.id === reqFriend.userId) {
  //         const type = { type: 4 };
  //         const Obj = Object.assign(user, type);
  //         arrUser.push(Obj);
  //       }
  //     }
  //   }
  // } else {
  //   for (const user of resultSearch) {
  //     for (const reqFriend of listSendReqFriend) {
  //       if (user.id === reqFriend.userId) {
  //         const type = { type: 4 };
  //         const Obj = Object.assign(user, type);
  //         arrUser.push(Obj);
  //       }
  //     }
  //   }
  // }

  // filter user
  if (arrUser.length) {
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
