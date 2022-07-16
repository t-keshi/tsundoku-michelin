import { gql } from "graphql-request";

export const fetchUserBookLogs = gql`
  query FetchUserBookLogs($userId: String!) {
    bookLogs(userId: $userId) {
      id
      log
      updatedAt
      book {
        id
        title
      }
    }
  }
`;
