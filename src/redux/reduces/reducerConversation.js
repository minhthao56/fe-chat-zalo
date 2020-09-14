import { GET_CONVERSATION_USER } from "../constants";

const initialState = [];

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONVERSATION_USER:
      const payload = action.payload;
      return payload;
    default:
      return state;
  }
};
export default myReducer;
