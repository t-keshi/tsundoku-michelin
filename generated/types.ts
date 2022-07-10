import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
import { ClientError } from 'graphql-request/dist/types';
import useSWR, { SWRConfiguration as SWRConfigInterface, Key as SWRKeyInterface } from 'swr';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  Bytes: any;
  DateTime: any;
  Decimal: any;
  Json: any;
};

export type Candidate = {
  __typename?: 'Candidate';
  age: Scalars['String'];
  createdAt: Scalars['DateTime'];
  depertment: Scalars['DateTime'];
  gender: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  status: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  candidates: Array<Candidate>;
};

export type CandidatesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type CandidatesQueryQuery = { __typename?: 'Query', candidates: Array<{ __typename?: 'Candidate', name: string }> };


export const CandidatesQueryDocument = gql`
    query CandidatesQuery {
  candidates {
    name
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CandidatesQuery(variables?: CandidatesQueryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CandidatesQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CandidatesQueryQuery>(CandidatesQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CandidatesQuery', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export function getSdkWithHooks(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  const sdk = getSdk(client, withWrapper);
  return {
    ...sdk,
    useCandidatesQuery(key: SWRKeyInterface, variables?: CandidatesQueryQueryVariables, config?: SWRConfigInterface<CandidatesQueryQuery, ClientError>) {
      return useSWR<CandidatesQueryQuery, ClientError>(key, () => sdk.CandidatesQuery(variables), config);
    }
  };
}
export type SdkWithHooks = ReturnType<typeof getSdkWithHooks>;