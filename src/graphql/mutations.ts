import { gql } from '@apollo/client';

// Mutation to create a new user
export const CreateUserMutation = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      id
      name
      email
      created_at
      updated_at
    }
  }
`;

// Mutation to create a user scene
export const CreateUserSceneMutation = gql`
  mutation CreateUserScene($userId: Int!, $sceneId: Int!) {
    createUserScene(userId: $userId, sceneId: $sceneId) {
      id
      user_id
      scene_id
      created_at
      updated_at
    }
  }
`;

// Mutation to create a user segment
export const CreateUserSegmentMutation = gql`
  mutation CreateUserSegment($userId: Int!, $segmentId: Int!, $data: Json) {
    createUserSegment(userId: $userId, segmentId: $segmentId, data: $data) {
      id
      user_id
      segment_id
      data
      created_at
      updated_at
    }
  }
`;
