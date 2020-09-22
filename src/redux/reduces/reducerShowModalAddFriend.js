import { SHOW_ADD_FRIEND, LOSE_ADD_FRIEND } from "../constants";

const initialState = {
  status: false,
  id: "",
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ADD_FRIEND:
      const id = action.payload;
      return { status: true, id: id };
    case LOSE_ADD_FRIEND:
      return {
        status: false,
        id: "",
      };
    default:
      return state;
  }
};
export default myReducer;
