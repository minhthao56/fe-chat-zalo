import { SUCCESS, ERROR } from "../constants";

const initialState = {
  type: "",
  data: {},
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
      const playload = action.playload;

      return {
        type: SUCCESS,
        data: playload,
      };
    case ERROR:
      const err = action.playload;
      return {
        type: ERROR,
        data: err,
      };
    default:
      return state;
  }
};
export default myReducer;
