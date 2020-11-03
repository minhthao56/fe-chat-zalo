import {
  SUCCESS,
  ERROR,
  GET_CONVERSATION_USER,
  GET_MESSENAGE_THEARER,
  ERROR_MESSENAGE_THEARER,
  CONFRIM_FRIEND,
  LIST_FRIEND,
  RESUTL_SEARCH,
  SHOW_ADD_FRIEND,
  LOSE_ADD_FRIEND,
  SHOW_BLUR,
  LOSE_BLUR,
  LIST_REQEST_ADD_FRIEND,
  LIST_SEND_RESQEST_ADD_FRIEND,
  SHOW_UPDATE_INFO,
  LOSE_UPDATE_INFO,
  DELETE_THEATER_ERROR,
  DELETE_THEATER_SUCCESS,
  CREATE_THEATER_ERROR,
  CREATE_THEATER_SUCCESS,
  CREATE_THEATER_RESET,
} from "../constants";
import {
  apiSignUp,
  apiLogin,
  apiConversation,
  apiFriends,
  apiUser,
} from "../../services";

// User
export const doSignUp = (values) => (dispatch) => {
  apiSignUp
    .postSignUp(values)
    .then((res) =>
      dispatch({
        type: SUCCESS,
        playload: res,
      })
    )
    .catch((err) =>
      dispatch({
        type: ERROR,
        playload: err.response.data,
      })
    );
};

export const doLogin = (values) => (dispatch) => {
  apiLogin
    .postLogin(values)
    .then((res) =>
      dispatch({
        type: SUCCESS,
        playload: res,
      })
    )
    .catch((err) =>
      dispatch({
        type: ERROR,
        playload: err.response.data,
      })
    );
};

export const loginGoogleSuccess = (token) => (dispatch) => {
  dispatch({
    type: SUCCESS,
    playload: token,
  });
};
export const loginGoogleError = (err) => (dispatch) => {
  dispatch({
    type: ERROR,
    playload: err,
  });
};

export const doCheckLogin = () => (dispatch) => {
  apiLogin
    .getCheckLogin()
    .then((res) =>
      dispatch({
        type: SUCCESS,
        playload: res,
      })
    )
    .catch((err) =>
      dispatch({
        type: ERROR,
        playload: err.response.data,
      })
    );
};

// export const doGetAllUser = () => (dispatch) => {
//   apiUser.getAllUser().then((res) =>
//     dispatch({
//       type: SUCCESS_All_USER,
//       playload: res,
//     })
//   );
// };

// Conversation
export const doGetConversationOfUser = (id) => (dispatch) => {
  apiConversation
    .getConversationOfUser(id)
    .then((res) =>
      dispatch({
        type: GET_CONVERSATION_USER,
        payload: res,
      })
    )
    .catch((err) => console.log(err));
};

export const doAllMessOfConversation = (id) => (dispatch) => {
  apiConversation
    .getAllMessOfConversation(id)
    .then((res) => {
      dispatch({
        type: GET_MESSENAGE_THEARER,
        payload: res,
      });
    })
    .catch((err) => {
      dispatch({
        type: ERROR_MESSENAGE_THEARER,
        playload: err.response.data,
      });
    });
};

// Friend
export const doConfirmRequestFriend = (id) => (dispatch) => {
  apiFriends
    .updateStatusOfRequest(id)
    .then((res) => {
      console.log(res);
      dispatch({
        type: CONFRIM_FRIEND,
      });
    })
    .catch((err) => console.log(err));
};

export const doGetListFriends = (id) => (dispatch) => {
  apiFriends
    .getListFriends(id)
    .then((res) => {
      dispatch({
        type: LIST_FRIEND,
        payload: res,
      });
    })
    .catch((err) => console.log(err));
};

export const doSearchFriend = (q) => (dispatch) => {
  apiFriends
    .searchFriends(q)
    .then((res) =>
      dispatch({
        type: RESUTL_SEARCH,
        payload: res,
      })
    )
    .catch((err) => console.log(err));
};

export const doShowModalAddFriend = (id) => ({
  type: SHOW_ADD_FRIEND,
  payload: id,
});
export const doLoseModalAddFriend = () => ({
  type: LOSE_ADD_FRIEND,
});

export const doShowBlur = () => ({
  type: SHOW_BLUR,
});
export const doLoseBlur = () => ({
  type: LOSE_BLUR,
});

export const doListRequestAddFriend = (id) => (dispatch) => {
  apiFriends
    .getsRequetsAddFriend(id)
    .then((res) =>
      dispatch({
        type: LIST_REQEST_ADD_FRIEND,
        payload: res,
      })
    )
    .catch((err) => console.log(err));
};

export const doListSendRequestAddFriend = (id) => (dispatch) => {
  apiFriends
    .getListUserSendRequest(id)
    .then((res) =>
      dispatch({
        type: LIST_SEND_RESQEST_ADD_FRIEND,
        payload: res,
      })
    )
    .catch((err) => console.log(err));
};

export const doShowUpdateInfo = () => ({
  type: SHOW_UPDATE_INFO,
});
export const doLoseUpdateInfo = () => ({
  type: LOSE_UPDATE_INFO,
});

export const doUpdateInfoUser = (id, data) => (dispatch) => {
  apiUser
    .updateUser(id, data)
    .then((res) =>
      dispatch({
        type: SUCCESS,
        playload: res,
      })
    )
    .catch((err) =>
      dispatch({
        type: ERROR,
        playload: err.response.data,
      })
    );
};

export const doUpdateAvata = (id, data) => (dispatch) => {
  apiUser
    .updateIamgeAvatar(id, data)
    .then((res) =>
      dispatch({
        type: SUCCESS,
        playload: res,
      })
    )
    .catch((err) =>
      dispatch({
        type: ERROR,
        playload: err.response.data,
      })
    );
};

export const doUpdateBanner = (id, data) => (dispatch) => {
  apiUser
    .updateImageBanner(id, data)
    .then((res) =>
      dispatch({
        type: SUCCESS,
        playload: res,
      })
    )
    .catch((err) =>
      dispatch({
        type: ERROR,
        playload: err.response.data,
      })
    );
};

export const doDeleteTheater = (id) => (dispatch) => {
  apiConversation
    .deleteOneTheater(id)
    .then((res) => {
      dispatch({
        type: DELETE_THEATER_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => console.log(err));
};

export const doCreateTheater = (data) => (dispatch) => {
  apiConversation
    .postCreateConversation(data)
    .then((res) => {
      dispatch({
        type: CREATE_THEATER_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      dispatch({
        type: CREATE_THEATER_ERROR,
        payload: err,
      });
    });
};

export const doCreateTheaterReset = () => (dispatch) => {
  dispatch({
    type: CREATE_THEATER_RESET,
  });
};
