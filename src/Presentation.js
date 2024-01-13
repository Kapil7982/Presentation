import { useEffect, useState } from "react";
import Reveal from "reveal.js";
import Draggable from "react-draggable";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import "./Presentation.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Video from "./Video";

const Presentation = ({ segments, scenes, nextSceneSegments }) => {
  const [currentSegment, setCurrentSegment] = useState({});

  const success_feedback = {
    video:
      "https://temp-ai-labs.s3.ap-south-1.amazonaws.com/demo/Scene+1.0/s1seg3.mp4",
    slide:
      "<div><img src='https://img.freepik.com/premium-vector/student-get-right-answer-illustration_561940-7.jpg' alt='Right Answer'><p>Great work, your answer is correct. Let's move on to the next topic.</p></div>",
    type: "feedback",
  };
  const failure_feedback = {
    video:
      "https://temp-ai-labs.s3.ap-south-1.amazonaws.com/demo/Scene+1.0/s1seg3.mp4",
    slide:
      "<div><img src='https://cdni.iconscout.com/illustration/premium/thumb/student-get-wrong-answer-4910463-4086519.png' alt='Wrong Answer'><p>Oh,it seems there might be a bit of confusion. No worries,let's revisit this topic again.</p></div>",
    type: "feedback",
  };

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

  const getNextSegment = () => {
    for (let i = 0; i < segments.length; i++) {
      if (segments[i].order == currentSegment.order+1) {
        return segments[i];
      }
    }
    return null; // Return null if the next segment is not found
  };

  const findCurrentScene = (scene_id, scenes) => {
    for (let i = 0; i < scenes.length; i++) {
      if (scenes[i].id == scene_id) {
        return scenes[i];
      }
    }
  }

  const findResultSegment = (order) => {
    for (let i = 0; i < segments.length; i++) {
      if (segments[i].order == order) {
        return segments[i]
      }
    }
    return null
  }

    const handleVideoEnded = async () => {
      const nextSegment = getNextSegment();

      if (currentSegment?.type === "assessment") {
        SpeechRecognition.startListening({ continuous: true });
      } else if (currentSegment?.type === "feedback" || currentSegment?.type === "revisit") {
        const next_step = JSON.parse(localStorage.getItem("next_scene"));
        const currentScene = findCurrentScene(next_step.scene_id, scenes);
        if (next_step.success) {
          await nextSceneSegments(currentScene?.successSceneId);
        } else {
          await nextSceneSegments(currentScene?.failureSceneId);
        }
      } else {
        setCurrentSegment(nextSegment);
      }
    };

    useEffect(() => {
      if (currentSegment.video) {
        document.querySelector("video").load();
        document.querySelector("video").play();
      }
    }, [currentSegment]);

    useEffect(() => {
      console.log(transcript);
      if (currentSegment?.data?.options?.includes(transcript)) {
        SpeechRecognition.stopListening();

        if (transcript == currentSegment?.data?.answer) {
          console.log("success");
          const nextSegment = findResultSegment(3)
          console.log("next segment", nextSegment);
          localStorage.setItem(
            "next_scene",
            JSON.stringify({ scene_id: currentSegment.scene_id, success: true })
            );
            setCurrentSegment(nextSegment);
        } else if (currentSegment?.data?.options?.includes(transcript)) {
          const nextSegment = findResultSegment(4)
          console.log("next segment", nextSegment);
          localStorage.setItem(
            "next_scene",
            JSON.stringify({
              scene_id: currentSegment.scene_id,
              success: false,
            })
          );
          setCurrentSegment(nextSegment);
        }
      }

      resetTranscript();
    }, [transcript, currentSegment]);

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
        <div className="videoTag">
          <Video
            video={currentSegment.video}
            handleVideoEnded={handleVideoEnded}
          />
        </div>
      </div>
    );
  };


export default Presentation;
