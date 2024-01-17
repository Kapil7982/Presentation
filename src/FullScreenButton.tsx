import React, { useState } from "react";
import "./FullScreenButton.css";
const FullScreenButton: React.FC = () => {
  const [isFullScreen, setFullScreen] = useState(false);

  const enterFullScreen = () => {
    const elem = document.documentElement as Element & {
      requestFullscreen: () => Promise<void>;
      mozRequestFullScreen?: () => Promise<void>;
      webkitRequestFullscreen?: () => Promise<void>;
      msRequestFullscreen?: () => Promise<void>;
    };

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
    setFullScreen(true);
  };

  const exitFullScreen = () => {
    const doc = document as Document & {
      exitFullscreen?: () => Promise<void>;
      mozCancelFullscreen?: () => Promise<void>;
      webkitExitFullscreen?: () => Promise<void>;
      msExitFullscreen?: () => Promise<void>;
    };

    if (doc.exitFullscreen) {
      doc.exitFullscreen();
    } else if (doc.mozCancelFullscreen) {
      doc.mozCancelFullscreen();
    } else if (doc.webkitExitFullscreen) {
      doc.webkitExitFullscreen();
    } else if (doc.msExitFullscreen) {
      doc.msExitFullscreen();
    }
    setFullScreen(false);
  };

  const toggleFullScreen = () => {
    if (isFullScreen) {
      exitFullScreen();
    } else {
      enterFullScreen();
    }
  };

  return (
    <button onClick={toggleFullScreen}>
      {isFullScreen ? (
        <div style={{display:"flex", alignItems:"center"}}>
          <i className="ri-fullscreen-exit-line"></i>
          <p style={{fontSize:"10px",  fontWeight:"400"}}>Exit Full Screen</p>
        </div>
      ) : (
        <div style={{display:"flex", alignItems:"center"}}>
          <i className="ri-fullscreen-line"></i> <p style={{fontSize:"10px", fontWeight:"400" }}>Full Screen</p>
        </div>
      )}
    </button>
  );
};

export default FullScreenButton;
