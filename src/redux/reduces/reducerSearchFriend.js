import { RESUTL_SEARCH } from "../constants";

const initialState = [];

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESUTL_SEARCH:
      const friends = action.payload;
      return friends;
    default:
      return state;
  }
};
export default myReducer;
