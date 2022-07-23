import { gql } from 'graphql-request';

export const onboardUser = gql`
  mutation OnboardUser($name: String!, $image: String) {
    updateUser(name: $name, image: $image) {
      id
    }
  }
`;
