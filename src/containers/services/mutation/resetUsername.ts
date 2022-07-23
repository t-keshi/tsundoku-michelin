import { gql } from 'graphql-request';

export const resetUsername = gql`
  mutation ResetUsername {
    updateUser(name: "") {
      id
    }
  }
`;
