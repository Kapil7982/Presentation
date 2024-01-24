import React, { useEffect, useState } from "react";
import client from "../graphql/client";
import { GetUsersPerScene } from "../graphql/queries"; // Import your queries

interface userScenes {
  scene_id: number;
  order: number;
  users: number;
}

const Demo = () => {
  const [data, setData] = useState<userScenes[]>();

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
    fetchUsersPerScene().then((res) => console.log(data));
  }, [data]);

  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iusto
      debitis alias, possimus soluta autem eos repellat quo error eligendi
      necessitatibus ut numquam doloremque assumenda quaerat! Aspernatur fugiat
      deleniti neque suscipit perferendis dolore tempora adipisci, unde
      doloremque sit, voluptate assumenda dolores libero quae exercitationem,
      ipsum sunt quam voluptates maxime maiores magnam voluptatibus sapiente!
      Ullam, nobis possimus magni et iure saepe repudiandae cum non excepturi
      tempora error voluptas eligendi. Error ducimus, similique, delectus
      dignissimos suscipit mollitia itaque accusantium porro repellat architecto
      pariatur, voluptas assumenda. Excepturi at repellat dignissimos! Neque
      inventore, harum perspiciatis dolore, quaerat expedita perferendis quae,
      commodi quia natus id.
    </div>
  );
};

export default Demo;
