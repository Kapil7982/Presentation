import React, { useEffect, useState } from "react";
import "./FullScreenButton.css";
const FullScreenButton: React.FC = () => {
  const [isFullScreen, setFullScreen] = useState(false);

  const enterFullScreen = () => {
    const elem = document.documentElement as Element & {
      requestFullscreen?: () => Promise<void>;
    };

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
      setFullScreen(true);
    }
  };

  const exitFullScreen = () => {
    const doc = document as Document & {
      exitFullscreen?: () => Promise<void>;
    };

    if (doc.exitFullscreen) {
      doc.exitFullscreen();
      setFullScreen(false);
    }
  };

  const toggleFullScreen = () => {
    if (isFullScreen) {
      exitFullScreen();
    } else {
      enterFullScreen();
    }
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      // setFullScreen(!!document.fullscreenElement);
      setFullScreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  return (
    <button className="FlsBtn" onClick={toggleFullScreen}>
      {isFullScreen ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          <i className="ri-fullscreen-exit-line"></i>
          <p style={{ fontSize: "10px", fontWeight: "400" }}>
            Exit Full Screen
          </p>
        </div>
      ) : (
        <div style={{ display: "flex", alignItems: "center" }}>
          <i className="ri-fullscreen-line"></i>{" "}
          <p style={{ fontSize: "10px", fontWeight: "400" }}>Full Screen</p>
        </div>
      )}
    </button>
  );
};

export default FullScreenButton;
