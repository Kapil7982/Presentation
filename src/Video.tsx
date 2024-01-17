import "./App.css";
import React from "react";
import Draggable from "react-draggable";
import LiveVideo from "./LiveVideo";

interface DraggableVideoProps {
  video: any;
  handleVideoEnded: () => void;
}

const DraggableVideo: React.FC<DraggableVideoProps> = ({ video, handleVideoEnded }) => {
  return (
    <Draggable defaultPosition={{ x: 400, y: 10 }}>
      <div>
        {/* Your video component with the specified props */}
        <video className="video" autoPlay onEnded={handleVideoEnded}>
          {video && <source src={video} type="video/mp4" />}
        </video>
        <LiveVideo />
      </div>
    </Draggable>
  );
};

export default DraggableVideo;
