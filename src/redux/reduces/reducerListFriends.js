import { LIST_FRIEND } from "../constants";

const initialState = [];

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_FRIEND:
      const friends = action.payload;
      return friends;
    default:
      return state;
  }
};
export default myReducer;
