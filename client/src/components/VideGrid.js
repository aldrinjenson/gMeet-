import React, { useEffect, useRef } from "react";

const VideoGrid = () => {
  const gridRef = useRef();

  const myVideo = document.createElement("video");

  const addVideoStream = (video, stream) => {
    video.srcObject = stream;
    video.addEventListener("loadedmetadata", () => {
      video.play();
    });
    gridRef.current.append(video);
  };

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        addVideoStream(myVideo, stream);
      });
  }, []);

  return (
    <div>
      <div ref={gridRef} id="video-grid"></div>
    </div>
  );
};

export default VideoGrid;
