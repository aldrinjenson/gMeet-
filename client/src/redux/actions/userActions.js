import axios from "axios";

const baseUrl = "http://localhost:3000/user/";

export const getRoomId = () => {
  return async (dispatch) => {
    await axios
      .get(`${baseUrl}get-room-id`)
      .then((res) => console.log(res.data.id))
      .catch((err) => console.log(err));
  };
};
