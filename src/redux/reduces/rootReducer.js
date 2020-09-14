import { combineReducers } from "redux";
import reduxUserData from "./reduceUserData";
import reduxListUser from "./reducerListUser";
import reduxConversation from "./reducerConversation"

const rootReducer = combineReducers({
  reduxUserData: reduxUserData,
  reduxListUser: reduxListUser,
  reduxConversation: reduxConversation
});

export default rootReducer;
