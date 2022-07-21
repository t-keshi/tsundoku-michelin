import { gql } from 'graphql-request';

export const removeBookLog = gql`
  mutation RemoveBookLog($bookLogId: String!) {
    removeBookLog(bookLogId: $bookLogId) {
      id
      bookId
    }
  }
`;
