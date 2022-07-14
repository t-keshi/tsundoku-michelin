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

export type Book = {
  __typename?: 'Book';
  bookContent: Array<BookContent>;
  bookLogCount: Scalars['Int'];
  bookshelfCount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  image: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
  userBookLog: Array<UserBookLog>;
};

export type BookContent = {
  __typename?: 'BookContent';
  bookId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  heading: Scalars['String'];
  id: Scalars['ID'];
  index: Scalars['Float'];
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  book: Book;
  bookContents: Array<BookContent>;
  books: Array<Book>;
};


export type QueryBookArgs = {
  id: Scalars['String'];
};


export type QueryBookContentsArgs = {
  bookId: Scalars['String'];
};

export type UserBookLog = {
  __typename?: 'UserBookLog';
  bookId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  log: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type FetchBookContentsQueryVariables = Exact<{
  bookId: Scalars['String'];
}>;


export type FetchBookContentsQuery = { __typename?: 'Query', book: { __typename?: 'Book', id: string, title: string }, bookContents: Array<{ __typename?: 'BookContent', id: string, bookId: string, index: number, type: string, heading: string }> };

export type FetchBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchBooksQuery = { __typename?: 'Query', books: Array<{ __typename?: 'Book', id: string, title: string, image: string, url: string, bookLogCount: number, bookshelfCount: number, createdAt: any, updatedAt: any }> };


export const FetchBookContentsDocument = gql`
    query FetchBookContents($bookId: String!) {
  book(id: $bookId) {
    id
    title
  }
  bookContents(bookId: $bookId) {
    id
    bookId
    index
    type
    heading
  }
}
    `;
export const FetchBooksDocument = gql`
    query FetchBooks {
  books {
    id
    title
    image
    url
    bookLogCount
    bookshelfCount
    createdAt
    updatedAt
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    FetchBookContents(variables: FetchBookContentsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FetchBookContentsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FetchBookContentsQuery>(FetchBookContentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FetchBookContents', 'query');
    },
    FetchBooks(variables?: FetchBooksQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FetchBooksQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FetchBooksQuery>(FetchBooksDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FetchBooks', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export function getSdkWithHooks(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  const sdk = getSdk(client, withWrapper);
  return {
    ...sdk,
    useFetchBookContents(key: SWRKeyInterface, variables: FetchBookContentsQueryVariables, config?: SWRConfigInterface<FetchBookContentsQuery, ClientError>) {
      return useSWR<FetchBookContentsQuery, ClientError>(key, () => sdk.FetchBookContents(variables), config);
    },
    useFetchBooks(key: SWRKeyInterface, variables?: FetchBooksQueryVariables, config?: SWRConfigInterface<FetchBooksQuery, ClientError>) {
      return useSWR<FetchBooksQuery, ClientError>(key, () => sdk.FetchBooks(variables), config);
    }
  };
}
export type SdkWithHooks = ReturnType<typeof getSdkWithHooks>;