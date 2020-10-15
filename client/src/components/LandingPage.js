import React from "react";
import { useDispatch } from "react-redux";
import { getRoomId } from "../redux/actions/userActions";

const LandingPage = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getRoomId());
  };

  return (
    <div>
      <h1>gMeet++</h1>
      <h3>Welcome to our cool video chat app!!</h3>
      <br />
      <h4>GoogleMeet Reloaded</h4>
      <input type="text" placeholder="Enter link" />
      <h3>OR</h3>
      <button onClick={handleClick}>Generate new Room</button>
    </div>
  );
};

export default LandingPage;
