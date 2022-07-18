import { gql } from "graphql-request";

export const resetUsername = gql`
  mutation ResetUsername($userId: String!) {
    resetUser(userId: $userId) {
      id
    }
  }
`;
