import {
  SUCCESS,
  ERROR,
  SUCCESS_All_USER,
  GET_CONVERSATION_USER,
} from "../constants";
import { apiSignUp, apiLogin, apiUser, apiConversation } from "../../services";

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

export const doGetAllUser = () => (dispatch) => {
  apiUser.getAllUser().then((res) =>
    dispatch({
      type: SUCCESS_All_USER,
      playload: res,
    })
  );
};

export const doGetConversationOfUser = (id) => (dispatch) => {
  console.log(id);
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
