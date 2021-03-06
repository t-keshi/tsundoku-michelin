import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
import { ClientError } from 'graphql-request/dist/types';
import useSWR, { SWRConfiguration as SWRConfigInterface, Key as SWRKeyInterface } from 'swr';
import useSWRInfinite, { SWRInfiniteConfiguration } from 'swr/infinite';
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

export type Account = {
  __typename?: 'Account';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  id_token?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  userId: Scalars['String'];
};

export type Book = {
  __typename?: 'Book';
  bookContents: Array<BookContent>;
  bookLogCount: Scalars['Int'];
  bookLogs: Array<BookLog>;
  bookshelfCount: Scalars['Int'];
  bookshelfs: Array<Bookshelf>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  image: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type BookContent = {
  __typename?: 'BookContent';
  book: Book;
  bookId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  heading: Scalars['String'];
  id: Scalars['ID'];
  index: Scalars['Float'];
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type BookLog = {
  __typename?: 'BookLog';
  book: Book;
  bookId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  log: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type BooksCount = {
  __typename?: 'BooksCount';
  count: Scalars['Int'];
};

export type BooksEdge = {
  __typename?: 'BooksEdge';
  books: Array<Book>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
};

export type Bookshelf = {
  __typename?: 'Bookshelf';
  book: Book;
  bookId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addBookshelf: Bookshelf;
  createBookLog: BookLog;
  onboardUser: User;
  removeBookLog: BookLog;
  removeBookshelf: Bookshelf;
  resetUser: User;
  updateBookLog: BookLog;
  updateUser: User;
};


export type MutationAddBookshelfArgs = {
  bookId: Scalars['String'];
};


export type MutationCreateBookLogArgs = {
  bookId: Scalars['String'];
  log: Scalars['String'];
};


export type MutationOnboardUserArgs = {
  image?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationRemoveBookLogArgs = {
  bookLogId: Scalars['String'];
};


export type MutationRemoveBookshelfArgs = {
  bookId: Scalars['String'];
};


export type MutationUpdateBookLogArgs = {
  bookLogId: Scalars['String'];
  log: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  onboarding?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  book: Book;
  bookContents: Array<BookContent>;
  bookLog?: Maybe<BookLog>;
  bookLogs: Array<BookLog>;
  books: Array<Book>;
  booksCount: BooksCount;
  booksEdge: BooksEdge;
  bookshelf?: Maybe<Bookshelf>;
  bookshelfs: Array<Bookshelf>;
  user: User;
};


export type QueryBookArgs = {
  bookId: Scalars['String'];
};


export type QueryBookContentsArgs = {
  bookId: Scalars['String'];
};


export type QueryBookLogArgs = {
  bookId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryBookLogsArgs = {
  userId: Scalars['String'];
};


export type QueryBooksArgs = {
  keyword?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryBooksEdgeArgs = {
  keyword?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryBookshelfArgs = {
  bookId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryBookshelfsArgs = {
  bookId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryUserArgs = {
  userId: Scalars['String'];
};

export type Session = {
  __typename?: 'Session';
  expires: Scalars['DateTime'];
  id: Scalars['ID'];
  sessionToken: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  bookLogs: Array<BookLog>;
  bookshelfs: Array<Bookshelf>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  onboarding?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
};

export type VerificationToken = {
  __typename?: 'VerificationToken';
  expires: Scalars['DateTime'];
  identifier: Scalars['String'];
  token: Scalars['String'];
};

export type AddBookshelfMutationVariables = Exact<{
  bookId: Scalars['String'];
}>;


export type AddBookshelfMutation = { __typename?: 'Mutation', addBookshelf: { __typename?: 'Bookshelf', id: string } };

export type CreateBookLogMutationVariables = Exact<{
  bookId: Scalars['String'];
  log: Scalars['String'];
}>;


export type CreateBookLogMutation = { __typename?: 'Mutation', createBookLog: { __typename?: 'BookLog', id: string } };

export type OnboardUserMutationVariables = Exact<{
  name: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
}>;


export type OnboardUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string } };

export type RemoveBookLogMutationVariables = Exact<{
  bookLogId: Scalars['String'];
}>;


export type RemoveBookLogMutation = { __typename?: 'Mutation', removeBookLog: { __typename?: 'BookLog', id: string, bookId: string } };

export type RemoveBookshelfMutationVariables = Exact<{
  bookId: Scalars['String'];
}>;


export type RemoveBookshelfMutation = { __typename?: 'Mutation', removeBookshelf: { __typename?: 'Bookshelf', id: string } };

export type ResetUsernameMutationVariables = Exact<{ [key: string]: never; }>;


export type ResetUsernameMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string } };

export type UpdateBookLogMutationVariables = Exact<{
  bookLogId: Scalars['String'];
  log: Scalars['String'];
}>;


export type UpdateBookLogMutation = { __typename?: 'Mutation', updateBookLog: { __typename?: 'BookLog', id: string } };

export type UpdateUserImageMutationVariables = Exact<{
  image: Scalars['String'];
}>;


export type UpdateUserImageMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string } };

export type UpdateUserInfoMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['String']>;
}>;


export type UpdateUserInfoMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string } };

export type FetchBookWithLogsQueryVariables = Exact<{
  bookId: Scalars['String'];
}>;


export type FetchBookWithLogsQuery = { __typename?: 'Query', book: { __typename?: 'Book', id: string, title: string, image: string, url: string, bookLogs: Array<{ __typename?: 'BookLog', id: string, log: string, updatedAt: any, user: { __typename?: 'User', id: string, name?: string | null, image?: string | null } }> } };

export type FetchBooksQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type FetchBooksQuery = { __typename?: 'Query', books: Array<{ __typename?: 'Book', id: string, title: string, image: string, url: string, bookLogCount: number, bookshelfCount: number, createdAt: any, updatedAt: any }> };

export type FetchBooksCountQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchBooksCountQuery = { __typename?: 'Query', booksCount: { __typename?: 'BooksCount', count: number } };

export type FetchBooksEdgeQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type FetchBooksEdgeQuery = { __typename?: 'Query', booksEdge: { __typename?: 'BooksEdge', hasNextPage?: boolean | null, books: Array<{ __typename?: 'Book', id: string, title: string, image: string, url: string, bookLogCount: number, bookshelfCount: number, createdAt: any, updatedAt: any }> } };

export type FetchBookshelfBooksQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type FetchBookshelfBooksQuery = { __typename?: 'Query', bookshelfs: Array<{ __typename?: 'Bookshelf', id: string, userId: string, book: { __typename?: 'Book', id: string, title: string, image: string, bookLogCount: number, bookshelfCount: number } }> };

export type FetchBookshelfsQueryVariables = Exact<{
  bookId: Scalars['String'];
  userId: Scalars['String'];
}>;


export type FetchBookshelfsQuery = { __typename?: 'Query', bookshelf?: { __typename?: 'Bookshelf', id: string } | null, bookLog?: { __typename?: 'BookLog', id: string } | null };

export type FetchEditBookLogInfoQueryVariables = Exact<{
  bookId: Scalars['String'];
  userId: Scalars['String'];
}>;


export type FetchEditBookLogInfoQuery = { __typename?: 'Query', bookLog?: { __typename?: 'BookLog', id: string, log: string } | null, book: { __typename?: 'Book', id: string, title: string, bookContents: Array<{ __typename?: 'BookContent', id: string, bookId: string, index: number, type: string, heading: string }> } };

export type FetchProfileQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type FetchProfileQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, name?: string | null, image?: string | null, profile?: string | null } };

export type FetchUserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type FetchUserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, name?: string | null, image?: string | null, profile?: string | null, bookshelfs: Array<{ __typename?: 'Bookshelf', id: string, book: { __typename?: 'Book', id: string, title: string, image: string, bookLogCount: number, bookshelfCount: number } }> } };

export type FetchUserBookLogsQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type FetchUserBookLogsQuery = { __typename?: 'Query', bookLogs: Array<{ __typename?: 'BookLog', id: string, log: string, updatedAt: any, book: { __typename?: 'Book', id: string, title: string } }> };

export type FetchUserOnboardQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type FetchUserOnboardQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, name?: string | null, image?: string | null, onboarding?: string | null } };

export type SearchBooksQueryVariables = Exact<{
  keyword: Scalars['String'];
}>;


export type SearchBooksQuery = { __typename?: 'Query', books: Array<{ __typename?: 'Book', id: string, title: string, image: string, url: string, bookLogCount: number, bookshelfCount: number, createdAt: any, updatedAt: any }> };


export const AddBookshelfDocument = gql`
    mutation AddBookshelf($bookId: String!) {
  addBookshelf(bookId: $bookId) {
    id
  }
}
    `;
export const CreateBookLogDocument = gql`
    mutation CreateBookLog($bookId: String!, $log: String!) {
  createBookLog(bookId: $bookId, log: $log) {
    id
  }
}
    `;
export const OnboardUserDocument = gql`
    mutation OnboardUser($name: String!, $image: String) {
  updateUser(name: $name, image: $image) {
    id
  }
}
    `;
export const RemoveBookLogDocument = gql`
    mutation RemoveBookLog($bookLogId: String!) {
  removeBookLog(bookLogId: $bookLogId) {
    id
    bookId
  }
}
    `;
export const RemoveBookshelfDocument = gql`
    mutation RemoveBookshelf($bookId: String!) {
  removeBookshelf(bookId: $bookId) {
    id
  }
}
    `;
export const ResetUsernameDocument = gql`
    mutation ResetUsername {
  updateUser(name: "") {
    id
  }
}
    `;
export const UpdateBookLogDocument = gql`
    mutation UpdateBookLog($bookLogId: String!, $log: String!) {
  updateBookLog(bookLogId: $bookLogId, log: $log) {
    id
  }
}
    `;
export const UpdateUserImageDocument = gql`
    mutation UpdateUserImage($image: String!) {
  updateUser(image: $image) {
    id
  }
}
    `;
export const UpdateUserInfoDocument = gql`
    mutation UpdateUserInfo($name: String, $profile: String) {
  updateUser(name: $name, profile: $profile) {
    id
  }
}
    `;
export const FetchBookWithLogsDocument = gql`
    query FetchBookWithLogs($bookId: String!) {
  book(bookId: $bookId) {
    id
    title
    image
    url
    bookLogs {
      id
      log
      updatedAt
      user {
        id
        name
        image
      }
    }
  }
}
    `;
export const FetchBooksDocument = gql`
    query FetchBooks($offset: Int, $limit: Int) {
  books(offset: $offset, limit: $limit) {
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
export const FetchBooksCountDocument = gql`
    query FetchBooksCount {
  booksCount {
    count
  }
}
    `;
export const FetchBooksEdgeDocument = gql`
    query FetchBooksEdge($offset: Int) {
  booksEdge(offset: $offset, limit: 50) {
    hasNextPage
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
}
    `;
export const FetchBookshelfBooksDocument = gql`
    query FetchBookshelfBooks($userId: String!) {
  bookshelfs(userId: $userId) {
    id
    userId
    book {
      id
      title
      image
      bookLogCount
      bookshelfCount
    }
  }
}
    `;
export const FetchBookshelfsDocument = gql`
    query FetchBookshelfs($bookId: String!, $userId: String!) {
  bookshelf(bookId: $bookId, userId: $userId) {
    id
  }
  bookLog(bookId: $bookId, userId: $userId) {
    id
  }
}
    `;
export const FetchEditBookLogInfoDocument = gql`
    query FetchEditBookLogInfo($bookId: String!, $userId: String!) {
  bookLog(bookId: $bookId, userId: $userId) {
    id
    log
  }
  book(bookId: $bookId) {
    id
    title
    bookContents {
      id
      bookId
      index
      type
      heading
    }
  }
}
    `;
export const FetchProfileDocument = gql`
    query FetchProfile($userId: String!) {
  user(userId: $userId) {
    id
    name
    image
    profile
  }
}
    `;
export const FetchUserDocument = gql`
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
export const FetchUserBookLogsDocument = gql`
    query FetchUserBookLogs($userId: String!) {
  bookLogs(userId: $userId) {
    id
    log
    updatedAt
    book {
      id
      title
    }
  }
}
    `;
export const FetchUserOnboardDocument = gql`
    query FetchUserOnboard($userId: String!) {
  user(userId: $userId) {
    id
    name
    image
    onboarding
  }
}
    `;
export const SearchBooksDocument = gql`
    query SearchBooks($keyword: String!) {
  books(keyword: $keyword) {
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
    AddBookshelf(variables: AddBookshelfMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddBookshelfMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddBookshelfMutation>(AddBookshelfDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AddBookshelf', 'mutation');
    },
    CreateBookLog(variables: CreateBookLogMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateBookLogMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateBookLogMutation>(CreateBookLogDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateBookLog', 'mutation');
    },
    OnboardUser(variables: OnboardUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<OnboardUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<OnboardUserMutation>(OnboardUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'OnboardUser', 'mutation');
    },
    RemoveBookLog(variables: RemoveBookLogMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RemoveBookLogMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RemoveBookLogMutation>(RemoveBookLogDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'RemoveBookLog', 'mutation');
    },
    RemoveBookshelf(variables: RemoveBookshelfMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RemoveBookshelfMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RemoveBookshelfMutation>(RemoveBookshelfDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'RemoveBookshelf', 'mutation');
    },
    ResetUsername(variables?: ResetUsernameMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ResetUsernameMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ResetUsernameMutation>(ResetUsernameDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ResetUsername', 'mutation');
    },
    UpdateBookLog(variables: UpdateBookLogMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateBookLogMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateBookLogMutation>(UpdateBookLogDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateBookLog', 'mutation');
    },
    UpdateUserImage(variables: UpdateUserImageMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserImageMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserImageMutation>(UpdateUserImageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateUserImage', 'mutation');
    },
    UpdateUserInfo(variables?: UpdateUserInfoMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserInfoMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserInfoMutation>(UpdateUserInfoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateUserInfo', 'mutation');
    },
    FetchBookWithLogs(variables: FetchBookWithLogsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FetchBookWithLogsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FetchBookWithLogsQuery>(FetchBookWithLogsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FetchBookWithLogs', 'query');
    },
    FetchBooks(variables?: FetchBooksQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FetchBooksQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FetchBooksQuery>(FetchBooksDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FetchBooks', 'query');
    },
    FetchBooksCount(variables?: FetchBooksCountQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FetchBooksCountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FetchBooksCountQuery>(FetchBooksCountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FetchBooksCount', 'query');
    },
    FetchBooksEdge(variables?: FetchBooksEdgeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FetchBooksEdgeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FetchBooksEdgeQuery>(FetchBooksEdgeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FetchBooksEdge', 'query');
    },
    FetchBookshelfBooks(variables: FetchBookshelfBooksQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FetchBookshelfBooksQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FetchBookshelfBooksQuery>(FetchBookshelfBooksDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FetchBookshelfBooks', 'query');
    },
    FetchBookshelfs(variables: FetchBookshelfsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FetchBookshelfsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FetchBookshelfsQuery>(FetchBookshelfsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FetchBookshelfs', 'query');
    },
    FetchEditBookLogInfo(variables: FetchEditBookLogInfoQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FetchEditBookLogInfoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FetchEditBookLogInfoQuery>(FetchEditBookLogInfoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FetchEditBookLogInfo', 'query');
    },
    FetchProfile(variables: FetchProfileQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FetchProfileQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FetchProfileQuery>(FetchProfileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FetchProfile', 'query');
    },
    FetchUser(variables: FetchUserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FetchUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FetchUserQuery>(FetchUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FetchUser', 'query');
    },
    FetchUserBookLogs(variables: FetchUserBookLogsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FetchUserBookLogsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FetchUserBookLogsQuery>(FetchUserBookLogsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FetchUserBookLogs', 'query');
    },
    FetchUserOnboard(variables: FetchUserOnboardQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FetchUserOnboardQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FetchUserOnboardQuery>(FetchUserOnboardDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FetchUserOnboard', 'query');
    },
    SearchBooks(variables: SearchBooksQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SearchBooksQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SearchBooksQuery>(SearchBooksDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SearchBooks', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export type SWRInfiniteKeyLoader<Data = unknown, Variables = unknown> = (
  index: number,
  previousPageData: Data | null
) => [keyof Variables, Variables[keyof Variables] | null] | null;
export function getSdkWithHooks(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  const sdk = getSdk(client, withWrapper);
  const utilsForInfinite = {
    generateGetKey: <Data = unknown, Variables = unknown>(
      id: string,
      getKey: SWRInfiniteKeyLoader<Data, Variables>
    ) => (pageIndex: number, previousData: Data | null) => {
      const key = getKey(pageIndex, previousData)
      return key ? [id, ...key] : null
    },
    generateFetcher: <Query = unknown, Variables = unknown>(query: (variables: Variables) => Promise<Query>, variables?: Variables) => (
        id: string,
        fieldName: keyof Variables,
        fieldValue: Variables[typeof fieldName]
      ) => query({ ...variables, [fieldName]: fieldValue } as Variables)
  }
  return {
    ...sdk,
    useFetchBookWithLogs(key: SWRKeyInterface, variables: FetchBookWithLogsQueryVariables, config?: SWRConfigInterface<FetchBookWithLogsQuery, ClientError>) {
      return useSWR<FetchBookWithLogsQuery, ClientError>(key, () => sdk.FetchBookWithLogs(variables), config);
    },
    useFetchBooks(key: SWRKeyInterface, variables?: FetchBooksQueryVariables, config?: SWRConfigInterface<FetchBooksQuery, ClientError>) {
      return useSWR<FetchBooksQuery, ClientError>(key, () => sdk.FetchBooks(variables), config);
    },
    useFetchBooksCount(key: SWRKeyInterface, variables?: FetchBooksCountQueryVariables, config?: SWRConfigInterface<FetchBooksCountQuery, ClientError>) {
      return useSWR<FetchBooksCountQuery, ClientError>(key, () => sdk.FetchBooksCount(variables), config);
    },
    useFetchBooksEdge(key: SWRKeyInterface, variables?: FetchBooksEdgeQueryVariables, config?: SWRConfigInterface<FetchBooksEdgeQuery, ClientError>) {
      return useSWR<FetchBooksEdgeQuery, ClientError>(key, () => sdk.FetchBooksEdge(variables), config);
    },
    useFetchBooksEdgeInfinite(id: string, getKey: SWRInfiniteKeyLoader<FetchBooksEdgeQuery, FetchBooksEdgeQueryVariables>, variables?: FetchBooksEdgeQueryVariables, config?: SWRInfiniteConfiguration<FetchBooksEdgeQuery, ClientError>) {
      return useSWRInfinite<FetchBooksEdgeQuery, ClientError>(
        utilsForInfinite.generateGetKey<FetchBooksEdgeQuery, FetchBooksEdgeQueryVariables>(id, getKey),
        utilsForInfinite.generateFetcher<FetchBooksEdgeQuery, FetchBooksEdgeQueryVariables>(sdk.FetchBooksEdge, variables),
        config);
    },
    useFetchBookshelfBooks(key: SWRKeyInterface, variables: FetchBookshelfBooksQueryVariables, config?: SWRConfigInterface<FetchBookshelfBooksQuery, ClientError>) {
      return useSWR<FetchBookshelfBooksQuery, ClientError>(key, () => sdk.FetchBookshelfBooks(variables), config);
    },
    useFetchBookshelfs(key: SWRKeyInterface, variables: FetchBookshelfsQueryVariables, config?: SWRConfigInterface<FetchBookshelfsQuery, ClientError>) {
      return useSWR<FetchBookshelfsQuery, ClientError>(key, () => sdk.FetchBookshelfs(variables), config);
    },
    useFetchEditBookLogInfo(key: SWRKeyInterface, variables: FetchEditBookLogInfoQueryVariables, config?: SWRConfigInterface<FetchEditBookLogInfoQuery, ClientError>) {
      return useSWR<FetchEditBookLogInfoQuery, ClientError>(key, () => sdk.FetchEditBookLogInfo(variables), config);
    },
    useFetchProfile(key: SWRKeyInterface, variables: FetchProfileQueryVariables, config?: SWRConfigInterface<FetchProfileQuery, ClientError>) {
      return useSWR<FetchProfileQuery, ClientError>(key, () => sdk.FetchProfile(variables), config);
    },
    useFetchUser(key: SWRKeyInterface, variables: FetchUserQueryVariables, config?: SWRConfigInterface<FetchUserQuery, ClientError>) {
      return useSWR<FetchUserQuery, ClientError>(key, () => sdk.FetchUser(variables), config);
    },
    useFetchUserBookLogs(key: SWRKeyInterface, variables: FetchUserBookLogsQueryVariables, config?: SWRConfigInterface<FetchUserBookLogsQuery, ClientError>) {
      return useSWR<FetchUserBookLogsQuery, ClientError>(key, () => sdk.FetchUserBookLogs(variables), config);
    },
    useFetchUserOnboard(key: SWRKeyInterface, variables: FetchUserOnboardQueryVariables, config?: SWRConfigInterface<FetchUserOnboardQuery, ClientError>) {
      return useSWR<FetchUserOnboardQuery, ClientError>(key, () => sdk.FetchUserOnboard(variables), config);
    },
    useSearchBooks(key: SWRKeyInterface, variables: SearchBooksQueryVariables, config?: SWRConfigInterface<SearchBooksQuery, ClientError>) {
      return useSWR<SearchBooksQuery, ClientError>(key, () => sdk.SearchBooks(variables), config);
    }
  };
}
export type SdkWithHooks = ReturnType<typeof getSdkWithHooks>;