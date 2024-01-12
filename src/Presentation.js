import { useEffect, useState } from "react";
import Reveal from "reveal.js";
import Draggable from "react-draggable";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import "./Presentation.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Presentation = ({ segments, nextSceneSegments }) => {
  const [currentSegment, setCurrentSegment] = useState({});

  useEffect(() => {
    setCurrentSegment(segments[0]);
  }, [segments]);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    Reveal.initialize({
      progress: true,
      center: true,
      hash: true,
      transition: "slide",
    });
  }, []);

  const handleVideoEnded = () => {
    const nextSegment = segments.find(
      (segment) => segment.id === currentSegment.next_segment_id
    );

    if (currentSegment.type === "assessment") {
      SpeechRecognition.startListening({ continuous: true });
    } else {
      setCurrentSegment(nextSegment);
    }
  };

  useEffect(() => {
    console.log(currentSegment);
    if (currentSegment.video) {
      document.querySelector("video").load();
      document.querySelector("video").play();
    }
  }, [currentSegment]);

  useEffect(() => {
    console.log(transcript);
    if (currentSegment.options?.includes(transcript)) {
      SpeechRecognition.stopListening();

      if (transcript === currentSegment.answer) {
        nextSceneSegments(currentSegment.success_scene_id);
      } else {
        nextSceneSegments(currentSegment.failure_scene_id);
      }
    }

    resetTranscript();
  }, [transcript]);

  return (
    <div className="Presentation">
      <div className="reveal">
        <div className="slides">
          <section
            style={{ height: "100%", width: "100%" }}
            dangerouslySetInnerHTML={{ __html: currentSegment.slide }}
          ></section>
        </div>
      </div>
      <Draggable defaultPosition={{ x: 640, y: -300 }}>
        <video autoPlay onEnded={handleVideoEnded}>
          {currentSegment.video && (
            <source src={currentSegment.video} type="video/mp4" />
          )}
        </video>
      </Draggable>
    </div>
  );
};

export default Presentation;
