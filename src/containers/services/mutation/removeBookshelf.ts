import { gql } from 'graphql-request';

export const removeBookshelf = gql`
  mutation RemoveBookshelf($bookId: String!) {
    removeBookshelf(bookId: $bookId) {
      id
    }
  }
`;
