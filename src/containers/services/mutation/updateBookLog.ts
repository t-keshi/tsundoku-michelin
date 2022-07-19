import { gql } from 'graphql-request';

export const updateBookLog = gql`
  mutation UpdateBookLog($bookLogId: String!, $log: String!) {
    updateBookLog(bookLogId: $bookLogId, log: $log) {
      id
    }
  }
`;
