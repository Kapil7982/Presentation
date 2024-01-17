import { gql } from '@apollo/client';

export const GetScenesByLectureId = gql`
  query GetScenesByLectureId($lectureId: Int!) {
    getScenesByLectureId(lectureId: $lectureId) {
      id
      order
      archived
      successSceneId
      failureSceneId
      created_at
      updated_at
      segments {
        id
        video
        slide
        order
        archived
        type
        nextSegmentId
        data
        created_at
        updated_at
      }
    }
  }
`;

export const GetSegmentsBySceneId = gql`
  query GetSegmentsBySceneId($sceneId: Int!) {
    getSegmentsBySceneId(sceneId: $sceneId) {
      scene_id
      id
      video
      slide
      order
      archived
      type
      nextSegmentId
      data
      created_at
      updated_at
    }
  }
`;
