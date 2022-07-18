import { gql } from "graphql-request";

export const onboardUser = gql`
  mutation OnboardUser($userId: String!, $name: String!, $image: String) {
    onboardUser(userId: $userId, name: $name, image: $image) {
      id
    }
  }
`;
