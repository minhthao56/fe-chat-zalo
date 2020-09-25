import { LIST_SEND_RESQEST_ADD_FRIEND } from "../constants";

const initialState = [];

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_SEND_RESQEST_ADD_FRIEND:
      const list = action.payload;
      return list;
    default:
      return state;
  }
};
export default myReducer;
