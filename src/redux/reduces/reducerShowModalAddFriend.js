import { SHOW_ADD_FRIEND, LOSE_ADD_FRIEND } from "../constants";

const initialState = false;

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ADD_FRIEND:
      return true;
    case LOSE_ADD_FRIEND:
      return false;
    default:
      return state;
  }
};
export default myReducer;
