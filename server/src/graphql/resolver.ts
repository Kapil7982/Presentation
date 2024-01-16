import { PrismaClient } from '../prisma/generated/client';

const prisma = new PrismaClient();

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
};

export default resolvers;
