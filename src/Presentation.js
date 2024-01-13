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

  // useEffect(() =>{
  //   if(segments.type === 'defenative'){
  //     console.log("Definetive", currentSegment?.next_scene_id)
  //     nextSceneSegments(currentSegment?.next_scene_id);
  //   }
  // },[currentSegment])

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

  const getNextSegment = () => {
    for (let i = 0; i < segments.length; i++) {
      if (segments[i].id == currentSegment.next_segment_id) {
        return segments[i];
      }
    }
    return null; // Return null if the next segment is not found
  };

  const handleVideoEnded = async () => {
  
    const nextSegment = getNextSegment();
   
    if (currentSegment?.type === "assessment") {
      SpeechRecognition.startListening({ continuous: true });
    } else if (currentSegment?.type === "defenative") {
      await nextSceneSegments(currentSegment?.next_scene_id);
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

      if (transcript == currentSegment.answer) {
        // nextSceneSegments(currentSegment.success_segment_id);
        const nextSegment = segments.find(
          (segment) => segment.id == currentSegment.success_segment_id
        );
        setCurrentSegment(nextSegment);
      } else if (currentSegment.options?.includes(transcript)) {
        const nextSegment = segments.find(
          (segment) => segment.id == currentSegment.failure_segment_id
        );
        setCurrentSegment(nextSegment);
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
