import { gql } from 'graphql-request';

export const addBookshelf = gql`
  mutation AddBookshelf($bookId: String!) {
    addBookshelf(bookId: $bookId) {
      id
    }
  }
`;
