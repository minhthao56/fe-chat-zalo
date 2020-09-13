import { SUCCESS, ERROR } from "../constants";
import { apiSignUp, apiLogin } from "../../services";

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
