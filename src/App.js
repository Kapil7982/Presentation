import "./App.css";
import Presentation from "./Presentation.js";
import "./Presentation.css";
import { useState, useEffect } from "react";
// import presentationData from "./presentation-data.json";

function App() {
  const [lecture, setLecture] = useState([]);
  const [scenes, setScenes] = useState([]);
  const [segments, setSegments] = useState([]);


  useEffect(() => {
    fetchLecture().then((res) => setLecture(res));
  }, []);

  const fetchLecture = async () => {
    try {
      const res = await fetch("http://localhost:3005/lectures");
      const data = await res.json();
      const filteredSessions = data.filter(
        (lecture) => lecture.type === "interactive-session"
      );
      return filteredSessions;
    } catch (error) {
      console.log("error in fetching lectuers", error);
    }
  };

  const fetchScenes = async (lectureId) => {
    try {
      const response = await fetch(
        `http://localhost:3005/scenes?lecture_id=${lectureId}&_sort=order`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching scenes:", error);
      return [];
    }
  };

  const fetchSegments = async (sceneId) => {
    try {
      const response = await fetch(
        `http://localhost:3005/segments?scene_id=${sceneId}&_sort=next_segment_id`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching segments:", error);
      return [];
    }
  };

  const startLecture = async (lectureId) => {
    const scenes = await fetchScenes(lectureId);
    setScenes(scenes);
    const segments = await fetchSegments(scenes[0]?.id);
    setSegments(segments);
  };

  const nextSceneSegments = async (sceneId) => {
    const segments = await fetchSegments(sceneId)
    setSegments(segments);
  };

  return (
    <div className="App border border-1 border-red-500" >
      <div className="Lecture h-fit ">
        {segments.length == 0 &&
          lecture.map((lecture) => {
            return (
              <button className="hover:bg-ms-red-600" key={lecture.id} onClick={() => startLecture(lecture.id)}>
                {lecture.title}
              </button>
            );
          })}
      </div>
      {segments?.length > 0 && (
        <Presentation
          segments={segments}
          scenes={scenes}
          nextSceneSegments={nextSceneSegments}
        />
      )}
    </div>
  );
}

export default App;
