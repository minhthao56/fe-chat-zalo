import { combineReducers } from "redux";
import reduxUserData from "./reduceUserData";
import reduxListUser from "./reducerListUser";
import reduxConversation from "./reducerConversation";
import reduxConfirmFriend from "./reducerConfirmFriend";
import reduxListFriend from "./reducerListFriends";
import reduxSearchFriend from "./reducerSearchFriend";
import reduxShowModalAddFriend from "./reducerShowModalAddFriend";
import reduxShowBlur from "./reducerShowBlur";

const rootReducer = combineReducers({
  reduxUserData: reduxUserData,
  reduxListUser: reduxListUser,
  reduxConversation: reduxConversation,
  reduxConfirmFriend: reduxConfirmFriend,
  reduxListFriend: reduxListFriend,
  reduxSearchFriend: reduxSearchFriend,
  reduxShowModalAddFriend: reduxShowModalAddFriend,
  reduxShowBlur: reduxShowBlur,
});

export default rootReducer;
