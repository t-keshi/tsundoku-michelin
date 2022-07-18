import { gql } from "graphql-request";

export const fetchUserOnboard = gql`
  query FetchUserOnboard($userId: String!) {
    user(userId: $userId) {
      id
      name
      image
      onboarding
    }
  }
`;
