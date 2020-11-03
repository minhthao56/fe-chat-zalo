import {
  CREATE_THEATER_ERROR,
  CREATE_THEATER_SUCCESS,
  CREATE_THEATER_RESET,
} from "../constants";

const initialState = {};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_THEATER_ERROR:
      return action.payload;
    case CREATE_THEATER_SUCCESS:
      return action.payload;
    case CREATE_THEATER_RESET:
      return {};

    default:
      return state;
  }
};
export default myReducer;
