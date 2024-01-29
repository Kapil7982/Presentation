import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import {
  CreateUserSceneMutation,
  CreateUserSegmentMutation,
} from "../../graphql/mutations";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import "./Presentation.css";
import Video from "../video/Video";
import MicButton from "./MicButton";
import FullScreenButton from "../full-screen/FullScreenButton";
import ReactMarkdown from "react-markdown";

interface Segment {
  id: number;
  type: string;
  order: number;
  video: string;
  data: {
    data: {
      options: string[];
      answer: string[];
    };
  };
  scene_id: number;
  slide: { slide: string };
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

const Presentation_2: React.FC<PresentationProps> = ({
  segments,
  scenes,
  nextSceneSegments,
}) => {
  const [currentSegment, setCurrentSegment] = useState<
    Segment | (() => Segment)
  >(() => ({} as Segment));
  const [transcript, setTranscript] = useState<string>("");
  const [isAssessment, setIsAssessment] = useState<boolean>(false);

  //   MUTATIONS
  const [createUserScene] = useMutation(CreateUserSceneMutation);
  const [createUserSegment] = useMutation(CreateUserSegmentMutation);

  useEffect(() => {
    setCurrentSegment(segments[0]);
  }, [segments]);

  const getCurrentSegment = (): Segment => {
    return typeof currentSegment == "function"
      ? currentSegment()
      : (currentSegment as Segment);
  };

  useEffect(() => {
    Reveal.initialize({
      progress: true,
      center: true,
      hash: true,
      transition: "slide",
    });
  }, []);

  function checkAnswer(transcript: string, answers: string[]) {
    // Convert the answers array into a Set for faster lookup
    const answersSet = new Set(answers);

    // Check if any sentence from the answers array appears in the transcript
    for (const sentence of answersSet) {
      // Use a case-insensitive search to allow for variations in case
      const regex = new RegExp(sentence, "i");
      if (transcript.search(regex) !== -1) {
        return true;
      }
    }

    // If no match is found, return false
    return false;
  }

  const getNextSegment = (): Segment | null => {

    const innerHtmlElement = document.querySelector(".innerHtml");
    // console.log("1remove")
    if (innerHtmlElement) {
      innerHtmlElement.classList.remove("show");
      console.log("removed111")
    }

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
      setIsAssessment(true)
      await createUserSegment({
        variables: { userId: 58952, segmentId: current.id, data: current.data },
      });
    } else if (current.type == "feedback" || current.type == "revisit") {
      setIsAssessment(false);
      await createUserSegment({
        variables: { userId: 58952, segmentId: current.id, data: current.data },
      });
      const nextStep = JSON.parse(
        localStorage.getItem("next_scene")!
      ) as Segment;
      const currentScene = findCurrentScene(nextStep.scene_id);

      if (nextStep.success) {
        // Call mutation to create user scene
        await createUserScene({
          variables: { userId: 58952, sceneId: currentScene?.id },
        });
        nextSceneSegments(currentScene?.successSceneId || 0);
      } else {
        // Call mutation to create user scene
        await createUserScene({
          variables: { userId: 58952, sceneId: currentScene?.id },
        });
        nextSceneSegments(currentScene?.failureSceneId || 0);
      }
    } else {
      // Call mutation to create user segment
      await createUserSegment({
        variables: { userId: 58952, segmentId: current.id, data: current.data },
      });
      setCurrentSegment(getNextSegment() || ({} as Segment));
    }
  };


  useEffect(() => {
    const current = getCurrentSegment();
    if (current.video) {
      document.querySelector("video")?.load();
      document.querySelector("video")?.play();
    }
    // -------------------
    const innerHtmlElement = document.querySelector(".innerHtml");

    if (innerHtmlElement) {
      const innerHtmlContent = innerHtmlElement.innerHTML.trim();
      const isContentBlank = innerHtmlContent === "";
      if (!isContentBlank) {
        console.log("added")
        innerHtmlElement.classList.add("show");
      }
    }

  }, [currentSegment]);

  useEffect(() => {
    const current = getCurrentSegment();
    console.log("transcript", transcript)
    if (current.type == "assessment") {
      if (checkAnswer(transcript, current?.data?.data?.answer)) {
        //Success
        const nextSegment = findResultSegment(current.order + 1);
        setTranscript("");
        //Local Storage setting for next scene
        localStorage.setItem(
          "next_scene",
          JSON.stringify({ scene_id: current?.scene_id, success: true })
        );

        setCurrentSegment(nextSegment || ({} as Segment));
      } else {
        //Failure
        const nextSegment = findResultSegment(current.order + 2);
        setTranscript("");
        //Local Storage setting for next scene
        localStorage.setItem(
          "next_scene",
          JSON.stringify({ scene_id: current?.scene_id, success: false })
        );

        setCurrentSegment(nextSegment || ({} as Segment));
      }
    }
  }, [transcript]);

  return (
    <div className="Presentation">
      <div className="reveal">
        <div className="slides">
          <section data-markdown style={{ height: "100%", width: "100%" }}>
            <div
              className="innerHtml"

              dangerouslySetInnerHTML={{
                __html: getCurrentSegment()?.slide?.slide,
              }}
            ></div>
            {/* Use ReactMarkdown to render the Markdown content */}
            {/* <ReactMarkdown className="innerHtml">{getCurrentSegment()?.slide?.slide}</ReactMarkdown> */}
          </section>
        </div>
      </div>
      <div className="videoTag">
        <Video
          video={getCurrentSegment().video}
          handleVideoEnded={handleVideoEnded}
        />
      </div>
      <div className="bottom-buttons">
        <MicButton isAssessment={isAssessment} setTranscript={setTranscript} />
        <FullScreenButton />

      </div>
    </div>
  );
};

// style={{display:"flex", alignItems:"center", }}
export default Presentation_2;
