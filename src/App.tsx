import React, { useState } from "react";
import Presentation from "./Presentation";
import "./Presentation.css";
import { fetchScenes, fetchSegments } from "./api";

interface Lecture {
  id: number;
  title: string;
  type: string;
}

function App() {
  const [lecture, setLecture] = useState<Lecture[]>([]);
  const [scenes, setScenes] = useState<any[]>([]);
  const [segments, setSegments] = useState<any[]>([]);

  const startLecture = async () => {
    const scenesData = await fetchScenes(1, 1);
    setScenes(scenesData);
    const segmentsData = await fetchSegments(scenesData[0]?.id);
    setSegments(segmentsData);
  };

  const nextSceneSegments = async (sceneId: any) => {
    const segmentsData = await fetchSegments(sceneId);
    setSegments(segmentsData);
  };
  return (
    <div className="App">
      <div className="Lecture">
        {segments.length === 0 ? (
          <button
            className="hover:bg-ms-red-600"
            onClick={() => startLecture()}
          >
            Start Lecture
          </button>
        ) : null}
      </div>

      <div>
        {segments?.length > 0 && (
          <Presentation
            segments={segments}
            scenes={scenes}
            nextSceneSegments={nextSceneSegments}
          />
        )}
      </div>
    </div>
  );
}

export default App;
