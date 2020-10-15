import { DELETE_THEATER_SUCCESS, DELETE_THEATER_ERROR } from "../constants";

const initialState = null;

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_THEATER_SUCCESS:
      const payload = action.payload;
      return payload;
    case DELETE_THEATER_ERROR:
      return action.payload;
    default:
      return state;
  }
};
export default myReducer;
