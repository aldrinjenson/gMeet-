import React, { useEffect, useRef } from "react";
import Peer from "peerjs";
import io from "socket.io-client";

const socket = io();
const myPeer = new Peer(undefined, {
  host: "localhost",
  port: "3001",
});

const peers = {};

const VideoGrid = ({ roomId }) => {
  const gridRef = useRef();

  const addVideoStream = (video, stream) => {
    video.srcObject = stream;
    video.addEventListener("loadedmetadata", () => {
      video.play();
    });
    gridRef.current.append(video);
  };

  useEffect(() => {
    const myVideo = document.createElement("video");
    myVideo.muted = true;

    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        addVideoStream(myVideo, stream);

        myPeer.on("call", (call) => {
          call.answer(stream);
          const video = document.createElement("video");
          call.on("stream", (userVideoStream) => {
            addVideoStream(video, userVideoStream);
          });
        });

        socket.on("user-connected", (userId) => {
          connectToNewUser(userId, stream);
        });
      });

    myPeer.on("open", (id) => {
      socket.emit("join-room", roomId, id);
    });
  }, []);

  const connectToNewUser = (userId, stream) => {
    const call = myPeer.call(userId, stream);

    const video = document.createElement("video");
    call.on("stream", (userVideoStream) => {
      addVideoStream(video, userVideoStream);
    });
    call.on("close", () => {
      video.remove();
    });
    peers[userId] = call;
  };

  socket.on("user-disconnected", (userId) => {
    if (peers[userId]) {
      peers[userId].close();
    }
  });

  return (
    <div>
      <div ref={gridRef} id="video-grid"></div>
    </div>
  );
};

export default VideoGrid;
