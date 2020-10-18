import { CREATE_THEATER_ERROR, CREATE_THEATER_SUCCESS } from "../constants";

const initialState = {};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_THEATER_ERROR:
      return action.payload;
    case CREATE_THEATER_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
export default myReducer;
