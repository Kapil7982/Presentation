// import React, { useState, useEffect } from "react";
// import Presentation from "./Presentation";
// import "./Presentation.css";
// // import { fetchScenes, fetchSegments } from "./api";
// import { GetScenesByLectureId, GetSegmentsBySceneId } from "./graphql/queries";
// import { useQuery } from "@apollo/client";

// interface Lecture {
//   id: number;
//   title: string;
//   type: string;
// }

// function App() {
//   const [scenes, setScenes] = useState<any[]>([]);
//   const [segments, setSegments] = useState<any[]>([]);

//   const startLecture = async () => {
//     const scenesData = await fetchScenes(1);
//     setScenes(scenesData);
//     const segmentsData = await fetchSegments(scenesData[0]?.id);
//     setSegments(segmentsData);
//   };

//   const fetchScenes = (id: number) => {
//     const { loading, error, data } = useQuery(GetScenesByLectureId, {
//       variables: { lectureId: id },
//     });
//     return data;
//   };
//   const fetchSegments = (id: number) => {
//     const { loading, error, data } = useQuery(GetSegmentsBySceneId, {
//       variables: { sceneId: id },
//     });
//     return data;
//   };

//   const nextSceneSegments = async (sceneId: any) => {
//     const segmentsData = await fetchSegments(sceneId);
//     setSegments(segmentsData);
//   };

//   return (
//     <div className="App">
//       <div className="Lecture ">
//         {segments.length == 0 ? (
//           <button
//             className="hover:bg-ms-red-600"
//             onClick={() => startLecture()}
//           >
//             Start Lecture
//           </button>
//         ) : null}
//       </div>
//       {segments?.length > 0 && (
//         <Presentation
//           segments={segments}
//           scenes={scenes}
//           nextSceneSegments={nextSceneSegments}
//         />
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import { GetScenesByLectureId, GetSegmentsBySceneId } from './graphql/queries'; // Import your queries
import client from './graphql/client';
import Presentation from './Presentation';

function App() {
  const [scenes, setScenes] = useState<any[]>([]);
  const [segments, setSegments] = useState<any[]>([]);

  const startLecture = async () => {
    const scenesData = await fetchScenes(73739);
    setScenes(scenesData);
    console.log("scenes",scenesData)
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
      console.error('Error fetching scenes:', error);
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
      console.error('Error fetching segments:', error);
      return null;
    }
  };

  const nextSceneSegments = async (sceneId: any) => {
    const segmentsData = await fetchSegments(sceneId);
    setSegments(segmentsData);
  };

  return (
    <div className="App">
      <div className="Lecture ">
        {segments?.length == 0 ? (
          <button className="hover:bg-ms-red-600" onClick={() => startLecture()}>
            Start Lecture
          </button>
        ) : null}
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
