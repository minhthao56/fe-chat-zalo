import { SHOW_BLUR, LOSE_BLUR } from "../constants";

const initialState = false;

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_BLUR:
      return true;
    case LOSE_BLUR:
      return false;
    default:
      return state;
  }
};
export default myReducer;
