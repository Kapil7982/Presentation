import React, { useEffect, useRef, useState } from "react";
import "./App.css";
const LiveVideo = () => {
  const videoRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(true);
  let mediaStream = null;

  const startCamera = async () => {
    try {
      mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }

      setIsCameraOn(true);
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };
  useEffect(() => {
    startCamera();
  }, []);

  return (
    <div>
      <video className="video" ref={videoRef} autoPlay playsInline />
    </div>
  );
};

export default LiveVideo;
