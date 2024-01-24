import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";
import client from "../graphql/client";
import { GetUsersPerScene } from "../graphql/queries"; // Import your queries

interface UserScenes {
  scene_id: number;
  users: number;
}

const Demo = () => {
  const [data, setData] = useState<UserScenes[]>();
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  const fetchUsersPerScene = async () => {
    try {
      const { data, errors } = await client.query({
        query: GetUsersPerScene,
      });

      if (errors) {
        console.error("GraphQL Errors:", errors);
      }

      if (data) {
        console.log("Guru Data", data);
        setData(data.getUsersPerScene);
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
      const sceneIds = data.map((item) => item.scene_id);
      const users = data.map((item) => item.users);

      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "bar",
          data: {
            // labels: sceneIds,
            labels: sceneIds.map(String),
            datasets: [
              {
                label: "Users per Scene",
                data: users,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
                borderWidth: 1,
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