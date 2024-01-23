import React, { useState, useEffect } from "react";
import "./Presentation.css";

interface MicProps {
  setTranscript: React.Dispatch<React.SetStateAction<string>>;
  isAssessment: boolean;
}

const MicButton: React.FC<MicProps> = ({ isAssessment, setTranscript }) => {
  const [isMicOn, setIsMicOn] = useState<boolean>(false);
  const [timer, setTimer] = useState<number | null>(null);
  //   const [transcription, setTranscription] = useState<string>("");

  const handleButtonClick = () => {
    setIsMicOn(true);
    setTimer(10);
    setTranscript("");

    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setTranscript(transcript);
    };

    recognition.onend = () => {
      setIsMicOn(false);
      setTimer(null);
    };

    recognition.start();

    const intervalId = setInterval(() => {
      setTimer((prevTimer) => (prevTimer !== null ? prevTimer - 1 : null));
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalId);
      recognition.stop();
    }, 10000);
  };

  useEffect(() => {
    // Cleanup function to make sure the interval is cleared
    return () => {
      if (timer !== null) {
        clearInterval(timer);
      }
    };
  }, [timer]);

  return (
    <>
      <button
        className="mic-btn"
        onClick={handleButtonClick}
        disabled={!isAssessment}
      >
        {isMicOn ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            {" "}
            <i className="ri-speak-fill"></i>
            <p style={{ fontSize: "10px", fontWeight: "400" }}>Mic On</p>
          </div>
        ) : (
          <div style={{ display: "flex", alignItems: "center" }}>
            <i className="ri-volume-off-vibrate-fill"></i>
            <p style={{ fontSize: "10px", fontWeight: "400" }}>Mic Off</p>
          </div>
        )}
      </button>
      <p className="mic-start-timer">
        {" "}
        {timer !== null && (
          <p>
            <b> {timer}</b> Seconds
          </p>
        )}
      </p>
    </>
  );
};

export default MicButton;
