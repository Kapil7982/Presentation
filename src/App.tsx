import React, { useState, useEffect } from "react";
import { GetScenesByLectureId, GetSegmentsBySceneId, GetUsersPerScene } from "./graphql/queries"; // Import your queries
import client from "./graphql/client";
// import Presentation from "./components/persentation/Presentation";
import "./components/presentation/Presentation.css";
import Background from "./utils/Background";
import FullScreenButton from "./components/fullScreen/FullScreenButton";
import Presentation_2 from "./components/presentation/Presentation_2";
import Demo from "./components/Demo";

interface Lecture {
  id: number;
  title: string;
  type: string;
}
// Preleaf Image = "https://static.prepleaf.com/brand/prepleaf/prepleaf-dark.svg"

//https://masai-website-images.s3.ap-south-1.amazonaws.com/logo.png
function App() {
  const [logoUrl, setLogoUrl] = useState<string>(
    "https://static.prepleaf.com/brand/prepleaf/prepleaf-dark.svg"
  );
  const [scenes, setScenes] = useState<any[]>([]);
  const [segments, setSegments] = useState<any[]>([]);

  const startLecture = async () => {
    const scenesData = await fetchScenes(73739);
    setScenes(scenesData);
    console.log("scenes", scenesData);
    const segmentsData = await fetchSegments(scenesData[0]?.id);
    setSegments(segmentsData);
    // await fetchUsersPerScene();
  };
  const fetchScenes = async (id: number) => {
    try {
      const { data } = await client.query({
        query: GetScenesByLectureId,
        variables: { lectureId: id },
      });
      // console.log("scenes--->", data);
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
      console.log("segments", data);
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
    <Background>
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
        {segments?.length > 0 && (
          <Presentation_2
            segments={segments}
            scenes={scenes}
            nextSceneSegments={nextSceneSegments}
          />
        )}
        {/* <div className="full-screen-button">
          <FullScreenButton />
        </div> */}
        <Demo/>
      </div>
    </Background>
  );
}

export default App;
