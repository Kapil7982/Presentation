import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const LiveVideo = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isCameraOn, setIsCameraOn] = useState(true);
  let mediaStream: MediaStream | null = null;

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
    return () => {
      // Cleanup function to stop the camera when the component unmounts
      if (mediaStream) {
        const tracks = mediaStream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div>
      <video className="video" ref={videoRef} autoPlay playsInline />
    </div>
  );
};

export default LiveVideo;
