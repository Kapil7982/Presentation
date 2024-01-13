import "./App.css";
import Presentation from "./Presentation.js";
import "./Presentation.css";
import { useState, useEffect } from "react";
import presentationData from "./presentation-data.json";

function App() {
  const [lecture, setLecture] = useState([]);
  const [scenes, setScenes] = useState([]);
  const [segments, setSegments] = useState([]);

  
  useEffect(() => {
    const lectures = fetchLecture();
    setLecture(lectures);
  }, []);

  const fetchLecture = () => {
    const lectures = presentationData.lectures.filter(
      (lecture) => lecture.type === "interactive-session"
    );
    return lectures;
  };

  const fetchScenes = (lectureId) => {
    const scenes = presentationData.scenes
      .filter(
        (scene) => scene.lecture_id === lectureId && scene.archived === false
      )
      .sort((a, b) => a.order - b.order);
    return scenes;
  };

  const fetchSegments = (sceneId) => {
    const segments = presentationData.segments
      .filter((segment) => segment.scene_id === sceneId)
      .sort((a, b) => a.next_segment_id - b.next_segment_id);
    return segments;
  };

  const startLecture = (lectureId) => {
    const scenes = fetchScenes(lectureId);
    setScenes(scenes);
    const segments = fetchSegments(scenes[0].id);
    setSegments(segments);
  };

  const nextSceneSegments = (sceneId) => {
    const segments = fetchSegments(sceneId);
    setSegments(segments);
    console.log("segments, APP",segments)
  };
  console.log("segments, APP out",segments)

  return (
    <div className="App">
      <div className="Lecture">
        {segments.length == 0 &&
          lecture.map((lecture) => {
            return (
              <button key={lecture.id} onClick={() => startLecture(lecture.id)}>
                {lecture.title}
              </button>
            );
          })}
      </div>
      {segments.length > 0 && (
        <Presentation
          segments={segments}
          nextSceneSegments={nextSceneSegments}
        />
      )}
    </div>
  );
}

export default App;
