import React, { useEffect, useState } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import "./Presentation.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Video from "./Video";

interface Segment {
  type: any;
  order: any;
  video: string;
  data: {
    options: string[];
    answer: string;
  };
  scene_id: number;
  slide: string;
  success?: boolean;
}

interface Scene {
  id: number;
  successSceneId: number;
  failureSceneId: number;
}

interface PresentationProps {
  segments: Segment[];
  scenes: Scene[];
  nextSceneSegments: (sceneId: number) => void;
}

const Presentation: React.FC<PresentationProps> = ({
  segments,
  scenes,
  nextSceneSegments,
}) => {
  const [currentSegment, setCurrentSegment] = useState<
    Segment | (() => Segment)
  >(() => ({} as Segment));

  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  useEffect(() => {
    const current = getCurrentSegment();
    if (current.video && isFullScreen) {
      document.querySelector("video")?.requestFullscreen();
    }
  }, [isFullScreen, currentSegment]);

  useEffect(() => {
    setCurrentSegment(segments[0]);
  }, [segments]);

  const getCurrentSegment = (): Segment => {
    return typeof currentSegment == "function"
      ? currentSegment()
      : (currentSegment as Segment);
  };

  const { transcript, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    Reveal.initialize({
      progress: true,
      center: true,
      hash: true,
      transition: "slide",
    });
  }, []);

  const getNextSegment = (): Segment | null => {
    const nextOrder = getCurrentSegment().order + 1;
    return segments.find((segment) => segment.order == nextOrder) || null;
  };

  const findCurrentScene = (sceneId: number): Scene | undefined => {
    return scenes.find((scene) => scene.id == sceneId);
  };

  const findResultSegment = (order: number): Segment | null => {
    return segments.find((segment) => segment.order == order) || null;
  };

  const handleVideoEnded = async () => {
    const current = getCurrentSegment();

    if (current.type == "assessment") {
      SpeechRecognition.startListening({ continuous: true });
    } else if (current.type == "feedback" || current.type == "revisit") {
      const nextStep = JSON.parse(
        localStorage.getItem("next_scene")!
      ) as Segment;
      const currentScene = findCurrentScene(nextStep.scene_id);
      if (nextStep.success) {
        await nextSceneSegments(currentScene?.successSceneId || 0);
      } else {
        await nextSceneSegments(currentScene?.failureSceneId || 0);
      }
    } else {
      setCurrentSegment(getNextSegment() || ({} as Segment));
    }
  };

  useEffect(() => {
    const current = getCurrentSegment();
    if (current.video) {
      document.querySelector("video")?.load();
      document.querySelector("video")?.play();
    }
  }, [currentSegment]);

  useEffect(() => {
    console.log(transcript);
    const current = getCurrentSegment();

    if (current?.data?.options?.includes(transcript)) {
      SpeechRecognition.stopListening();

      if (transcript == current?.data?.answer) {
        console.log("success");
        const nextSegment = findResultSegment(3);
        console.log("next segment", nextSegment);
        localStorage.setItem(
          "next_scene",
          JSON.stringify({ scene_id: current.scene_id, success: true })
        );
        setCurrentSegment(nextSegment || ({} as Segment));
      } else if (current?.data?.options?.includes(transcript)) {
        const nextSegment = findResultSegment(4);
        console.log("next segment", nextSegment);
        localStorage.setItem(
          "next_scene",
          JSON.stringify({
            scene_id: current.scene_id,
            success: false,
          })
        );
        setCurrentSegment(nextSegment || ({} as Segment));
      }
    }

    resetTranscript();
  }, [transcript, currentSegment]);

  return (
    <div className="Presentation">
      {/* <div className={`Presentation ${isFullScreen ? "full-screen" : ""}`}> */}
        <div className="reveal">
          <div className="slides">
            <section
              style={{ height: "100%", width: "100%" }}
              dangerouslySetInnerHTML={{ __html: getCurrentSegment().slide }}
            ></section>
          </div>
        </div>
        <div className="videoTag">
          <Video
            video={getCurrentSegment().video}
            handleVideoEnded={handleVideoEnded}
          />
        </div>
        {/* <button className="fullscreen-button" onClick={toggleFullScreen}>
          {isFullScreen ? "Exit Full Screen" : "Full Screen"}
        </button>
      </div> */}
    
    </div>
  );
};

export default Presentation;
