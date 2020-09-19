import { combineReducers } from "redux";
import reduxUserData from "./reduceUserData";
import reduxListUser from "./reducerListUser";
import reduxConversation from "./reducerConversation";
import reduxConfirmFriend from "./reducerConfirmFriend";
import reduxListFriend from "./reducerListFriends";

const rootReducer = combineReducers({
  reduxUserData: reduxUserData,
  reduxListUser: reduxListUser,
  reduxConversation: reduxConversation,
  reduxConfirmFriend: reduxConfirmFriend,
  reduxListFriend: reduxListFriend,
});

export default rootReducer;
