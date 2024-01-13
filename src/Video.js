import React from "react";
import Draggable from "react-draggable";
import LiveVideo from "./LiveVIdeo";
import "./App.css"

function Video({ video, handleVideoEnded }) {
  const element = {};

  return (
    <>
      <Draggable className="zIndex" defaultPosition={{ x: 1200, y: -750 }}>
        <div>
          <video className="video" autoPlay onEnded={handleVideoEnded}>
            {video && <source src={video} type="video/mp4" />}
          </video>
          <LiveVideo />
        </div>
      </Draggable>
    </>
  );
}

export default Video;
