import { GET_MESSENAGE_THEARER } from "../constants";

const initialState = [];

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSENAGE_THEARER:
      const payload = action.payload;
      return payload;
    default:
      return state;
  }
};
export default myReducer;
