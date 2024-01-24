import React, { useEffect, useState } from "react";
import client from "../graphql/client";
import { GetUsersPerScene } from "../graphql/queries"; // Import your queries

interface userScenes {
    scene_id: number;
    order: number;
    users: number;
}

const Demo = () => {
    const [ data, setData ] = useState<userScenes[]>();

    const fetchUsersPerScene = async () => {
        try {
          const { data, errors } = await client.query({
            query: GetUsersPerScene,
          });
      
          if (errors) {
            console.error("GraphQL Errors:", errors);
          }
      
          if (data) {
            setData(data.getUsersPerScene);
            console.log("Users per scene:", data.getUsersPerScene);
          }
        } catch (error: any) {
          console.error("Error fetching users per scene:", error);
        }
      };

      useEffect(() => {
        fetchUsersPerScene().then(res => console.log(data));
      }, [data])


  return <div>Demo</div>;
};

export default Demo;
