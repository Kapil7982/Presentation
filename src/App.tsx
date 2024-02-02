import React from "react";
import { Route, Routes } from "react-router-dom";
import Demo from "./components/Demo";
import App2 from "./App2";

function App() {
  const [logoUrl, setLogoUrl] = useState<string>(
    "https://static.prepleaf.com/brand/prepleaf/prepleaf-dark.svg"
  );
  const [scenes, setScenes] = useState<any[]>([]);
  const [segments, setSegments] = useState<any[]>([]);
  const [isVictorySignShown, setIsVictorySignShown] = useState(false);

  const startLecture = async () => {
    const scenesData = await fetchScenes(73739);
    setScenes(scenesData);
    // console.log("scenes", scenesData);
    const segmentsData = await fetchSegments(scenesData[0]?.id);
    setSegments(segmentsData);
  };
  const fetchScenes = async (id: number) => {
    try {
      const { data } = await client.query({
        query: GetScenesByLectureId,
        variables: { lectureId: id },
      });
      // console.log("scenes", data);
      return data.getScenesByLectureId;
    } catch (error: any) {
      console.error("Error fetching scenes:", error);
      return null;
    }
  };

  const fetchSegments = async (id: number) => {
    try {
      const { data } = await client.query({
        query: GetSegmentsBySceneId,
        variables: { sceneId: id },
      });
      // console.log("segments", data);
      return data.getSegmentsBySceneId;
    } catch (error: any) {
      console.error("Error fetching segments:", error);
      return null;
    }
  };

  const nextSceneSegments = async (sceneId: any) => {
    const segmentsData = await fetchSegments(sceneId);
    setSegments(segmentsData);
  };

  return (
    <>
      <Routes>
        <Route path="/anylit" element={<Demo />} />
        <Route path="/" element={<App2 />} />
      </Routes>
    </>
  );
}
export default App;
