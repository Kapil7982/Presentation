import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";
import client from "../graphql/client";
import { GetUsersPerScene } from "../graphql/queries"; // Import your queries

interface UserScenes {
  scene_id: number;
  users: number;
  order: number;
}

const Demo = () => {
  const [data, setData] = useState<UserScenes[]>();
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  //console.log("Guru Data Out", data);
  
  const fetchUsersPerScene = async () => {
    try {
      const { data, errors } = await client.query({
        query: GetUsersPerScene,
      });
      //console.log("Guru Data", data);

      if (errors) {
        console.error("GraphQL Errors:", errors);
      }

      if (data) {
        setData(data.getUsersPerScene);
        console.log("Guru Data", data);
        console.log("Users per scene:", data.getUsersPerScene);
      }
    } catch (error: any) {
      console.error("Error fetching users per scene:", error);
    }
  };

  useEffect(() => {
    fetchUsersPerScene();
  }, []);

  useEffect(() => {
    if (data && chartRef.current) {
      const sceneIds = data?.map((item) => `Scene ${item.order}`);
      const users = data.map((item) => item.users);

      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "line",
          data: {
            // labels: sceneIds,
            labels: sceneIds,
            datasets: [
              {
                label: "Users per Scene",
                data: users,
               // backgroundColor: ["rgba(178, 222, 39)", "rgba(255, 0, 0, 1)"],
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 1,
                tension: 0.1,
              
              },
            ],
          },
          options: {
            scales: {
              x: {
                // type: "linear",
                // position: "bottom",
                type: "category", // Use category scale for scene_ids
                labels: sceneIds.map(String),
              },
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }
  }, [data]);

  return (
    <div>
      <canvas ref={chartRef} width="400" height="200"></canvas>
      {/* Your Lorem Ipsum text */}
    </div>
  );
};

export default Demo;
