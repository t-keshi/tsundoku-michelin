import { gql } from 'graphql-request';

export const fetchUser = gql`
  query FetchUser($userId: String!) {
    user(userId: $userId) {
      id
      name
      image
      profile
      bookshelfs {
        id
        book {
          id
          title
          image
          bookLogCount
          bookshelfCount
        }
      }
    }
  }
`;
