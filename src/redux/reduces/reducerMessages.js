import { GET_CONVERSATION_THEARER } from "../constants";

const initialState = [];

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONVERSATION_THEARER:
      const payload = action.payload;
      return payload;
    default:
      return state;
  }
};
export default myReducer;
