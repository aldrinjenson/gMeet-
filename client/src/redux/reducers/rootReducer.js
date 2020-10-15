import { combineReducers } from "redux";
import chatReducer from "./chatReducer";
import userReducer from "./userReducer";
import videoReducer from "./videoReducer";

const rootReducer = combineReducers({
  videoReducer: videoReducer,
  chatReducer: chatReducer,
  userReducer: userReducer,
});

export default rootReducer;
