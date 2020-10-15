import { SET_ROOM_ID, SET_USER_CREDENTIALS } from "../actionTypes";

const INIT_STATE = {
  userName: "",
  userId: "",
  roomId: "",
};
const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_USER_CREDENTIALS:
      return {
        ...state,
        ...action.payload,
      };
    case SET_ROOM_ID:
      return {
        ...state,
        roomId: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
