import { gql } from "graphql-request";

export const candidates = gql`
  query GetCandidates {
    candidates {
      name
    }
  }
`;
