import React, { useState, useEffect } from "react";
import Presentation from "./Presentation";
import "./Presentation.css";
import { fetchLecture, fetchScenes, fetchSegments } from "./api";

interface Lecture {
  id: number;
  title: string;
  type: string;
}

function App() {
  const [lecture, setLecture] = useState<Lecture[]>([]);
  const [scenes, setScenes] = useState<any[]>([]);
  const [segments, setSegments] = useState<any[]>([]);

  useEffect(() => {
    fetchLecture().then((res) => setLecture(res));
  }, []);

  const startLecture = async (lectureId: number) => {
    const scenesData = await fetchScenes(lectureId, 0);
    setScenes(scenesData);
    const segmentsData = await fetchSegments(scenesData[0]?.id);
    setSegments(segmentsData);
  };

  const nextSceneSegments = async (sceneId: any) => {
    const segmentsData = await fetchSegments(sceneId);
    setSegments(segmentsData);
  };

  return (
    <div className="App border border-1 border-red-500">
      <div className="Lecture h-fit">
        {segments.length == 0 &&
          lecture.map((lecture) => (
            <button
              className="hover:bg-ms-red-600"
              key={lecture.id}
              onClick={() => startLecture(lecture.id)}
            >
              {lecture.title}
            </button>
          ))}
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
