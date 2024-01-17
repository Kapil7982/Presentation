import { PrismaClient } from "../../prisma/generated/client";
// import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type CreateUserInput = {
  name: string;
  email: string;
  password: string;
};

type CreateUserSceneInput = {
  userId: bigint | number;
  sceneId: number;
  created_at?: Date | string;
  updated_at?: Date | string;
};

type CreateUserSegmentInput = {
  userId: bigint | number;
  segmentId: number;
  data?: any; // You can replace `any` with a more specific type based on your requirements
  created_at?: Date | string;
  updated_at?: Date | string;
};


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
          user_id: userId as number | bigint,
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
