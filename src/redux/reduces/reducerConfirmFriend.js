import { CONFRIM_FRIEND } from "../constants";

const initialState = "";

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONFRIM_FRIEND:
      return CONFRIM_FRIEND;
    default:
      return state;
  }
};
export default myReducer;
