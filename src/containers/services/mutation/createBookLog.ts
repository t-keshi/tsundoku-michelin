import { gql } from "graphql-request";

export const createBookLog = gql`
  mutation CreateBookLog($bookId: String!, $log: String!) {
    createBookLog(bookId: $bookId, log: $log) {
      id
    }
  }
`;
