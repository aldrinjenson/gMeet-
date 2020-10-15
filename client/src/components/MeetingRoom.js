import React from "react";
import { useSelector } from "react-redux";
import VideoGrid from "./VideGrid";

const MeetingRoom = () => {
  const roomId = useSelector((state) => state.userReducer.roomId);

  return (
    <div className="meeting-room">
      <h3>Hello</h3>
      <div className="video-grid">
        <VideoGrid roomId={54} />
      </div>
    </div>
  );
};

export default MeetingRoom;
