import { combineReducers } from "redux";
import reduxUserData from "./reduceUserData";

const rootReducer = combineReducers({
  reduxUserData: reduxUserData,
});

export default rootReducer;
