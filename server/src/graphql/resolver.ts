import { PrismaClient } from "../../prisma/generated/client";
// import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type CreateUserInput = {
  name: string;
  email: string;
  password: string;
};

type CreateUserSceneInput = {
  userId: number;
  sceneId: number;
  created_at?: Date | string;
  updated_at?: Date | string;
};

type CreateUserSegmentInput = {
  userId: number;
  segmentId: number;
  data?: any; // You can replace `any` with a more specific type based on your requirements
  created_at?: Date | string;
  updated_at?: Date | string;
};

interface SceneUserCount {
  scene_id: number;
  users: number;
  order: number;
}

interface SceneUserCount {
  scene_id: number;
  users: number;
  order: number;
  usersSet?: Set<number>; // Add this line to define the 'usersSet' property
}


const resolvers = {
  Query: {
    getScenesByLectureId: async (_: any, { lectureId }: { lectureId: number }) => {
      return prisma.scenes.findMany({
        where: {
          lecture_id: lectureId,
        },
        include: {
          segments: true,
        },
      });
    },
    getSegmentsBySceneId: async (_: any, { sceneId }: { sceneId: number }) => {
      return prisma.segments.findMany({
        where: {
          scene_id: sceneId,
        },
      });
    },
    
    getUsersPerScene: async (): Promise<SceneUserCount[]> => {
      try {
        const userScenes = await prisma.user_scenes.findMany({
          include: {
            scenes: {
              select: {
                id: true,
                order: true,
              },
            },
          },
        });
    
        // Create a map to store user counts for each scene
        const sceneUserCountsMap: Map<number, SceneUserCount> = new Map();
    
        userScenes.forEach((userScene) => {
          const sceneId = userScene.scene_id;
    
          // If the scene is not in the map, add it with initial values
          if (!sceneUserCountsMap.has(sceneId)) {
            sceneUserCountsMap.set(sceneId, {
              scene_id: sceneId,
              users: 0,
              order: userScene.scenes?.order || 0,
              usersSet: new Set(),
            });
          }
    
          const sceneUserCount = sceneUserCountsMap.get(sceneId);
          const userId = userScene.user_id;
    
          // Check if the user is unique for this scene
          if (!sceneUserCount?.usersSet?.has(userId)) {
            sceneUserCount?.usersSet?.add(userId);
            sceneUserCount!.users++;
          }
        });
    
        // Convert the map values to an array
        const resultArray: SceneUserCount[] = Array.from(sceneUserCountsMap.values());
        resultArray.sort((a, b) => {return a.order - b.order});
    
        return resultArray;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    },
  },
  Mutation: {
    createUser: async (_: any, { name, email, password }: CreateUserInput) => {
      return prisma.users.create({
        data: {
          name,
          email,
          password,
        },
      });
    },
    createUserScene: async (_ : any, { userId, sceneId, created_at, updated_at }: CreateUserSceneInput) => {
      return prisma.user_scenes.create({
        data: {
          user_id: userId,
          scene_id: sceneId,
          created_at: created_at || new Date(),
          updated_at: updated_at || new Date(),
        },
      });
    },
    
    createUserSegment: async (_ : any, { userId, segmentId, data, created_at, updated_at }: CreateUserSegmentInput) => {
      return prisma.user_segments.create({
        data: {
          user_id: userId,
          segment_id: segmentId,
          data,
          created_at: created_at || new Date(),
          updated_at: updated_at || new Date(),
        },
      });
    },
    
  },
};

export default resolvers;
