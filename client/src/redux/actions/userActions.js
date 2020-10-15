import axios from "axios";
import { SET_ROOM_ID, SET_USER_CREDENTIALS } from "../actionTypes";

const baseUrl = "http://localhost:3000/user/";

export const setData = (data, type) => {
  return {
    type,
    payload: data,
  };
};

export const getRoomId = (userName) => {
  return async (dispatch) => {
    await axios
      .post(`${baseUrl}get-room-id`, { userName })
      .then((res) => {
        const { user, roomId } = res.data;
        console.log(res.data);
        dispatch(setData(user, SET_USER_CREDENTIALS));
        dispatch(setData(roomId, SET_ROOM_ID));
      })
      .catch((err) => console.log(err));
  };
};
