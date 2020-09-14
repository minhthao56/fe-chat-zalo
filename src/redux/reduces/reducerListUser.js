import { SUCCESS_All_USER } from "../constants";

const initialState = [];

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_All_USER:
      const users = action.playload;
      return users;
    default:
      return state;
  }
};
export default myReducer;
