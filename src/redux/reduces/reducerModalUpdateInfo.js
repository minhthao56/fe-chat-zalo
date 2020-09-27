import { SHOW_UPDATE_INFO, LOSE_UPDATE_INFO } from "../constants";

const initialState = false;

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_UPDATE_INFO:
      return true;
    case LOSE_UPDATE_INFO:
      return false;
    default:
      return state;
  }
};
export default myReducer;
