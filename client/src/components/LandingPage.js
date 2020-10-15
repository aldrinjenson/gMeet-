import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getRoomId } from "../redux/actions/userActions";

const LandingPage = () => {
  const dispatch = useDispatch();
  const roomId = useSelector((state) => state.userReducer.roomId);
  const history = useHistory();

  const [userName, setUserName] = useState("test user");
  const [link, setLink] = useState("");

  useEffect(() => {
    if (roomId) {
      history.push(`/meeting/${roomId}`);
    }
  }, [roomId]);

  const handleClick = () => {
    dispatch(getRoomId(userName));
  };

  return (
    <div>
      <h1>gMeet++</h1>
      <h3>Welcome to our cool video chat app!!</h3>
      <br />
      <h4>GoogleMeet Reloaded</h4>
      <label htmlFor="name">Enter Your name</label>
      <input
        type="text"
        value={userName}
        required
        name="name"
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Enter link"
      />
      <button disabled={!link}>Join Room</button>
      <h3>OR</h3>

      <button disabled={!userName} onClick={handleClick}>
        Generate new Room
      </button>
    </div>
  );
};

export default LandingPage;
