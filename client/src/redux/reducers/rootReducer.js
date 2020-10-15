import { combineReducers } from "redux";
import chatReducer from "./chatReducer";
import videoReducer from "./videoReducer";

const rootReducer = combineReducers({
  videoReducer: videoReducer,
  chatReducer: chatReducer,
});

export default rootReducer;
