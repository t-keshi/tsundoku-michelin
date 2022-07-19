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
  DateTime: any;
  Decimal: any;
  Json: any;
  Upload: any;
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

export type AccountAvgAggregateOutputType = {
  __typename?: 'AccountAvgAggregateOutputType';
  expires_at?: Maybe<Scalars['Float']>;
};

export type AccountAvgOrderByAggregateInput = {
  expires_at?: InputMaybe<SortOrder>;
};

export type AccountCountAggregateOutputType = {
  __typename?: 'AccountCountAggregateOutputType';
  _all: Scalars['Int'];
  access_token: Scalars['Int'];
  expires_at: Scalars['Int'];
  id: Scalars['Int'];
  id_token: Scalars['Int'];
  provider: Scalars['Int'];
  providerAccountId: Scalars['Int'];
  refresh_token: Scalars['Int'];
  scope: Scalars['Int'];
  session_state: Scalars['Int'];
  token_type: Scalars['Int'];
  type: Scalars['Int'];
  userId: Scalars['Int'];
};

export type AccountCountOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountCreateInput = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  user: UserCreateNestedOneWithoutAccountsInput;
};

export type AccountCreateManyInput = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  userId: Scalars['String'];
};

export type AccountCreateManyUserInput = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

export type AccountCreateManyUserInputEnvelope = {
  data: AccountCreateManyUserInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AccountCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<AccountWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<AccountCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<AccountCreateWithoutUserInput>>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
};

export type AccountCreateOrConnectWithoutUserInput = {
  create: AccountUncheckedCreateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountCreateWithoutUserInput = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

export type AccountListRelationFilter = {
  every?: InputMaybe<AccountWhereInput>;
  none?: InputMaybe<AccountWhereInput>;
  some?: InputMaybe<AccountWhereInput>;
};

export type AccountMaxAggregateOutputType = {
  __typename?: 'AccountMaxAggregateOutputType';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  id_token?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type AccountMaxOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountMinAggregateOutputType = {
  __typename?: 'AccountMinAggregateOutputType';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  id_token?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type AccountMinOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AccountOrderByWithAggregationInput = {
  _avg?: InputMaybe<AccountAvgOrderByAggregateInput>;
  _count?: InputMaybe<AccountCountOrderByAggregateInput>;
  _max?: InputMaybe<AccountMaxOrderByAggregateInput>;
  _min?: InputMaybe<AccountMinOrderByAggregateInput>;
  _sum?: InputMaybe<AccountSumOrderByAggregateInput>;
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountOrderByWithRelationInput = {
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountProviderProviderAccountIdCompoundUniqueInput = {
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
};

export enum AccountScalarFieldEnum {
  AccessToken = 'access_token',
  ExpiresAt = 'expires_at',
  Id = 'id',
  IdToken = 'id_token',
  Provider = 'provider',
  ProviderAccountId = 'providerAccountId',
  RefreshToken = 'refresh_token',
  Scope = 'scope',
  SessionState = 'session_state',
  TokenType = 'token_type',
  Type = 'type',
  UserId = 'userId'
}

export type AccountScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<AccountScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<AccountScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<AccountScalarWhereInput>>>;
  access_token?: InputMaybe<StringNullableFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AccountScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<AccountScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<AccountScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<AccountScalarWhereWithAggregatesInput>>>;
  access_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  expires_at?: InputMaybe<IntNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  id_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  provider?: InputMaybe<StringWithAggregatesFilter>;
  providerAccountId?: InputMaybe<StringWithAggregatesFilter>;
  refresh_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  scope?: InputMaybe<StringNullableWithAggregatesFilter>;
  session_state?: InputMaybe<StringNullableWithAggregatesFilter>;
  token_type?: InputMaybe<StringNullableWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type AccountSumAggregateOutputType = {
  __typename?: 'AccountSumAggregateOutputType';
  expires_at?: Maybe<Scalars['Int']>;
};

export type AccountSumOrderByAggregateInput = {
  expires_at?: InputMaybe<SortOrder>;
};

export type AccountUncheckedCreateInput = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  userId: Scalars['String'];
};

export type AccountUncheckedCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<AccountWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<AccountCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<AccountCreateWithoutUserInput>>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
};

export type AccountUncheckedCreateWithoutUserInput = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

export type AccountUncheckedUpdateInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AccountUncheckedUpdateManyInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AccountUncheckedUpdateManyWithoutAccountsInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AccountUncheckedUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<AccountWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<AccountCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<AccountCreateWithoutUserInput>>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<AccountWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<AccountScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<AccountWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<AccountWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<AccountUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<AccountUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<AccountUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type AccountUncheckedUpdateWithoutUserInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AccountUpdateInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAccountsInput>;
};

export type AccountUpdateManyMutationInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AccountUpdateManyWithWhereWithoutUserInput = {
  data: AccountUncheckedUpdateManyWithoutAccountsInput;
  where: AccountScalarWhereInput;
};

export type AccountUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<AccountWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<AccountCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<AccountCreateWithoutUserInput>>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<AccountWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<AccountScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<AccountWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<AccountWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<AccountUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<AccountUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<AccountUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type AccountUpdateWithWhereUniqueWithoutUserInput = {
  data: AccountUncheckedUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountUpdateWithoutUserInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AccountUpsertWithWhereUniqueWithoutUserInput = {
  create: AccountUncheckedCreateWithoutUserInput;
  update: AccountUncheckedUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<AccountWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<AccountWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<AccountWhereInput>>>;
  access_token?: InputMaybe<StringNullableFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

export type AccountWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  provider_providerAccountId?: InputMaybe<AccountProviderProviderAccountIdCompoundUniqueInput>;
};

export type AggregateAccount = {
  __typename?: 'AggregateAccount';
  _avg?: Maybe<AccountAvgAggregateOutputType>;
  _count?: Maybe<AccountCountAggregateOutputType>;
  _max?: Maybe<AccountMaxAggregateOutputType>;
  _min?: Maybe<AccountMinAggregateOutputType>;
  _sum?: Maybe<AccountSumAggregateOutputType>;
};

export type AggregateBook = {
  __typename?: 'AggregateBook';
  _avg?: Maybe<BookAvgAggregateOutputType>;
  _count?: Maybe<BookCountAggregateOutputType>;
  _max?: Maybe<BookMaxAggregateOutputType>;
  _min?: Maybe<BookMinAggregateOutputType>;
  _sum?: Maybe<BookSumAggregateOutputType>;
};

export type AggregateBookContent = {
  __typename?: 'AggregateBookContent';
  _avg?: Maybe<BookContentAvgAggregateOutputType>;
  _count?: Maybe<BookContentCountAggregateOutputType>;
  _max?: Maybe<BookContentMaxAggregateOutputType>;
  _min?: Maybe<BookContentMinAggregateOutputType>;
  _sum?: Maybe<BookContentSumAggregateOutputType>;
};

export type AggregateBookLog = {
  __typename?: 'AggregateBookLog';
  _count?: Maybe<BookLogCountAggregateOutputType>;
  _max?: Maybe<BookLogMaxAggregateOutputType>;
  _min?: Maybe<BookLogMinAggregateOutputType>;
};

export type AggregateBookshelf = {
  __typename?: 'AggregateBookshelf';
  _count?: Maybe<BookshelfCountAggregateOutputType>;
  _max?: Maybe<BookshelfMaxAggregateOutputType>;
  _min?: Maybe<BookshelfMinAggregateOutputType>;
};

export type AggregateSession = {
  __typename?: 'AggregateSession';
  _count?: Maybe<SessionCountAggregateOutputType>;
  _max?: Maybe<SessionMaxAggregateOutputType>;
  _min?: Maybe<SessionMinAggregateOutputType>;
};

export type AggregateTopics = {
  __typename?: 'AggregateTopics';
  _avg?: Maybe<TopicsAvgAggregateOutputType>;
  _count?: Maybe<TopicsCountAggregateOutputType>;
  _max?: Maybe<TopicsMaxAggregateOutputType>;
  _min?: Maybe<TopicsMinAggregateOutputType>;
  _sum?: Maybe<TopicsSumAggregateOutputType>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregateOutputType>;
  _max?: Maybe<UserMaxAggregateOutputType>;
  _min?: Maybe<UserMinAggregateOutputType>;
};

export type AggregateUsers = {
  __typename?: 'AggregateUsers';
  _avg?: Maybe<UsersAvgAggregateOutputType>;
  _count?: Maybe<UsersCountAggregateOutputType>;
  _max?: Maybe<UsersMaxAggregateOutputType>;
  _min?: Maybe<UsersMinAggregateOutputType>;
  _sum?: Maybe<UsersSumAggregateOutputType>;
};

export type AggregateVerificationToken = {
  __typename?: 'AggregateVerificationToken';
  _count?: Maybe<VerificationTokenCountAggregateOutputType>;
  _max?: Maybe<VerificationTokenMaxAggregateOutputType>;
  _min?: Maybe<VerificationTokenMinAggregateOutputType>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

export type Book = {
  __typename?: 'Book';
  bookContents: Array<BookContent>;
  bookLogCount: Scalars['Int'];
  bookLogs: Array<BookLog>;
  bookshelfCount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  image: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type BookAvgAggregateOutputType = {
  __typename?: 'BookAvgAggregateOutputType';
  bookLogCount?: Maybe<Scalars['Float']>;
  bookshelfCount?: Maybe<Scalars['Float']>;
};

export type BookAvgOrderByAggregateInput = {
  bookLogCount?: InputMaybe<SortOrder>;
  bookshelfCount?: InputMaybe<SortOrder>;
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

export type BookContentAvgAggregateOutputType = {
  __typename?: 'BookContentAvgAggregateOutputType';
  index?: Maybe<Scalars['Float']>;
};

export type BookContentAvgOrderByAggregateInput = {
  index?: InputMaybe<SortOrder>;
};

export type BookContentCountAggregateOutputType = {
  __typename?: 'BookContentCountAggregateOutputType';
  _all: Scalars['Int'];
  bookId: Scalars['Int'];
  createdAt: Scalars['Int'];
  heading: Scalars['Int'];
  id: Scalars['Int'];
  index: Scalars['Int'];
  type: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type BookContentCountOrderByAggregateInput = {
  bookId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  heading?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  index?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BookContentCreateInput = {
  book: BookCreateNestedOneWithoutBookContentsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  heading: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  index: Scalars['Float'];
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BookContentCreateManyBookInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  heading: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  index: Scalars['Float'];
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BookContentCreateManyBookInputEnvelope = {
  data: BookContentCreateManyBookInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BookContentCreateManyInput = {
  bookId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  heading: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  index: Scalars['Float'];
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BookContentCreateNestedManyWithoutBookInput = {
  connect?: InputMaybe<Array<InputMaybe<BookContentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<BookContentCreateOrConnectWithoutBookInput>>>;
  create?: InputMaybe<Array<InputMaybe<BookContentCreateWithoutBookInput>>>;
  createMany?: InputMaybe<BookContentCreateManyBookInputEnvelope>;
};

export type BookContentCreateOrConnectWithoutBookInput = {
  create: BookContentUncheckedCreateWithoutBookInput;
  where: BookContentWhereUniqueInput;
};

export type BookContentCreateWithoutBookInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  heading: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  index: Scalars['Float'];
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BookContentListRelationFilter = {
  every?: InputMaybe<BookContentWhereInput>;
  none?: InputMaybe<BookContentWhereInput>;
  some?: InputMaybe<BookContentWhereInput>;
};

export type BookContentMaxAggregateOutputType = {
  __typename?: 'BookContentMaxAggregateOutputType';
  bookId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  heading?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BookContentMaxOrderByAggregateInput = {
  bookId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  heading?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  index?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BookContentMinAggregateOutputType = {
  __typename?: 'BookContentMinAggregateOutputType';
  bookId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  heading?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BookContentMinOrderByAggregateInput = {
  bookId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  heading?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  index?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BookContentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BookContentOrderByWithAggregationInput = {
  _avg?: InputMaybe<BookContentAvgOrderByAggregateInput>;
  _count?: InputMaybe<BookContentCountOrderByAggregateInput>;
  _max?: InputMaybe<BookContentMaxOrderByAggregateInput>;
  _min?: InputMaybe<BookContentMinOrderByAggregateInput>;
  _sum?: InputMaybe<BookContentSumOrderByAggregateInput>;
  bookId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  heading?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  index?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BookContentOrderByWithRelationInput = {
  book?: InputMaybe<BookOrderByWithRelationInput>;
  bookId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  heading?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  index?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum BookContentScalarFieldEnum {
  BookId = 'bookId',
  CreatedAt = 'createdAt',
  Heading = 'heading',
  Id = 'id',
  Index = 'index',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type BookContentScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<BookContentScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<BookContentScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<BookContentScalarWhereInput>>>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  heading?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  index?: InputMaybe<FloatFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BookContentScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<BookContentScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<BookContentScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<BookContentScalarWhereWithAggregatesInput>>>;
  bookId?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  heading?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  index?: InputMaybe<FloatWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type BookContentSumAggregateOutputType = {
  __typename?: 'BookContentSumAggregateOutputType';
  index?: Maybe<Scalars['Float']>;
};

export type BookContentSumOrderByAggregateInput = {
  index?: InputMaybe<SortOrder>;
};

export type BookContentUncheckedCreateInput = {
  bookId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  heading: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  index: Scalars['Float'];
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BookContentUncheckedCreateNestedManyWithoutBookInput = {
  connect?: InputMaybe<Array<InputMaybe<BookContentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<BookContentCreateOrConnectWithoutBookInput>>>;
  create?: InputMaybe<Array<InputMaybe<BookContentCreateWithoutBookInput>>>;
  createMany?: InputMaybe<BookContentCreateManyBookInputEnvelope>;
};

export type BookContentUncheckedCreateWithoutBookInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  heading: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  index: Scalars['Float'];
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BookContentUncheckedUpdateInput = {
  bookId?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  heading?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  index?: InputMaybe<FloatFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookContentUncheckedUpdateManyInput = {
  bookId?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  heading?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  index?: InputMaybe<FloatFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookContentUncheckedUpdateManyWithoutBookContentsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  heading?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  index?: InputMaybe<FloatFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookContentUncheckedUpdateManyWithoutBookInput = {
  connect?: InputMaybe<Array<InputMaybe<BookContentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<BookContentCreateOrConnectWithoutBookInput>>>;
  create?: InputMaybe<Array<InputMaybe<BookContentCreateWithoutBookInput>>>;
  createMany?: InputMaybe<BookContentCreateManyBookInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<BookContentWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<BookContentScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<BookContentWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<BookContentWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<BookContentUpdateWithWhereUniqueWithoutBookInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<BookContentUpdateManyWithWhereWithoutBookInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<BookContentUpsertWithWhereUniqueWithoutBookInput>>>;
};

export type BookContentUncheckedUpdateWithoutBookInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  heading?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  index?: InputMaybe<FloatFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookContentUpdateInput = {
  book?: InputMaybe<BookUpdateOneRequiredWithoutBookContentsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  heading?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  index?: InputMaybe<FloatFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookContentUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  heading?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  index?: InputMaybe<FloatFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookContentUpdateManyWithWhereWithoutBookInput = {
  data: BookContentUncheckedUpdateManyWithoutBookContentsInput;
  where: BookContentScalarWhereInput;
};

export type BookContentUpdateManyWithoutBookInput = {
  connect?: InputMaybe<Array<InputMaybe<BookContentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<BookContentCreateOrConnectWithoutBookInput>>>;
  create?: InputMaybe<Array<InputMaybe<BookContentCreateWithoutBookInput>>>;
  createMany?: InputMaybe<BookContentCreateManyBookInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<BookContentWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<BookContentScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<BookContentWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<BookContentWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<BookContentUpdateWithWhereUniqueWithoutBookInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<BookContentUpdateManyWithWhereWithoutBookInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<BookContentUpsertWithWhereUniqueWithoutBookInput>>>;
};

export type BookContentUpdateWithWhereUniqueWithoutBookInput = {
  data: BookContentUncheckedUpdateWithoutBookInput;
  where: BookContentWhereUniqueInput;
};

export type BookContentUpdateWithoutBookInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  heading?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  index?: InputMaybe<FloatFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookContentUpsertWithWhereUniqueWithoutBookInput = {
  create: BookContentUncheckedCreateWithoutBookInput;
  update: BookContentUncheckedUpdateWithoutBookInput;
  where: BookContentWhereUniqueInput;
};

export type BookContentWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<BookContentWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<BookContentWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<BookContentWhereInput>>>;
  book?: InputMaybe<BookWhereInput>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  heading?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  index?: InputMaybe<FloatFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BookContentWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type BookCountAggregateOutputType = {
  __typename?: 'BookCountAggregateOutputType';
  _all: Scalars['Int'];
  bookLogCount: Scalars['Int'];
  bookshelfCount: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  image: Scalars['Int'];
  title: Scalars['Int'];
  updatedAt: Scalars['Int'];
  url: Scalars['Int'];
};

export type BookCountOrderByAggregateInput = {
  bookLogCount?: InputMaybe<SortOrder>;
  bookshelfCount?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type BookCountOutputType = {
  __typename?: 'BookCountOutputType';
  bookContents: Scalars['Int'];
  bookLogs: Scalars['Int'];
  bookshelfs: Scalars['Int'];
};

export type BookCreateInput = {
  bookContents?: InputMaybe<BookContentCreateNestedManyWithoutBookInput>;
  bookLogCount: Scalars['Int'];
  bookLogs?: InputMaybe<BookLogCreateNestedManyWithoutBookInput>;
  bookshelfCount: Scalars['Int'];
  bookshelfs?: InputMaybe<BookshelfCreateNestedManyWithoutBookInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type BookCreateManyInput = {
  bookLogCount: Scalars['Int'];
  bookshelfCount: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type BookCreateNestedOneWithoutBookContentsInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutBookContentsInput>;
  create?: InputMaybe<BookUncheckedCreateWithoutBookContentsInput>;
};

export type BookCreateNestedOneWithoutBookLogsInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutBookLogsInput>;
  create?: InputMaybe<BookUncheckedCreateWithoutBookLogsInput>;
};

export type BookCreateNestedOneWithoutBookshelfsInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutBookshelfsInput>;
  create?: InputMaybe<BookUncheckedCreateWithoutBookshelfsInput>;
};

export type BookCreateOrConnectWithoutBookContentsInput = {
  create: BookUncheckedCreateWithoutBookContentsInput;
  where: BookWhereUniqueInput;
};

export type BookCreateOrConnectWithoutBookLogsInput = {
  create: BookUncheckedCreateWithoutBookLogsInput;
  where: BookWhereUniqueInput;
};

export type BookCreateOrConnectWithoutBookshelfsInput = {
  create: BookUncheckedCreateWithoutBookshelfsInput;
  where: BookWhereUniqueInput;
};

export type BookCreateWithoutBookContentsInput = {
  bookLogCount: Scalars['Int'];
  bookLogs?: InputMaybe<BookLogCreateNestedManyWithoutBookInput>;
  bookshelfCount: Scalars['Int'];
  bookshelfs?: InputMaybe<BookshelfCreateNestedManyWithoutBookInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type BookCreateWithoutBookLogsInput = {
  bookContents?: InputMaybe<BookContentCreateNestedManyWithoutBookInput>;
  bookLogCount: Scalars['Int'];
  bookshelfCount: Scalars['Int'];
  bookshelfs?: InputMaybe<BookshelfCreateNestedManyWithoutBookInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type BookCreateWithoutBookshelfsInput = {
  bookContents?: InputMaybe<BookContentCreateNestedManyWithoutBookInput>;
  bookLogCount: Scalars['Int'];
  bookLogs?: InputMaybe<BookLogCreateNestedManyWithoutBookInput>;
  bookshelfCount: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
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

export type BookLogBookUserIdCompoundUniqueInput = {
  bookId: Scalars['String'];
  userId: Scalars['String'];
};

export type BookLogCountAggregateOutputType = {
  __typename?: 'BookLogCountAggregateOutputType';
  _all: Scalars['Int'];
  bookId: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  log: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type BookLogCountOrderByAggregateInput = {
  bookId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  log?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookLogCreateInput = {
  book: BookCreateNestedOneWithoutBookLogsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  log: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutBookLogsInput;
};

export type BookLogCreateManyBookInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  log: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type BookLogCreateManyBookInputEnvelope = {
  data: BookLogCreateManyBookInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BookLogCreateManyInput = {
  bookId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  log: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type BookLogCreateManyUserInput = {
  bookId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  log: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BookLogCreateManyUserInputEnvelope = {
  data: BookLogCreateManyUserInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BookLogCreateNestedManyWithoutBookInput = {
  connect?: InputMaybe<Array<InputMaybe<BookLogWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<BookLogCreateOrConnectWithoutBookInput>>>;
  create?: InputMaybe<Array<InputMaybe<BookLogCreateWithoutBookInput>>>;
  createMany?: InputMaybe<BookLogCreateManyBookInputEnvelope>;
};

export type BookLogCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<BookLogWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<BookLogCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<BookLogCreateWithoutUserInput>>>;
  createMany?: InputMaybe<BookLogCreateManyUserInputEnvelope>;
};

export type BookLogCreateOrConnectWithoutBookInput = {
  create: BookLogUncheckedCreateWithoutBookInput;
  where: BookLogWhereUniqueInput;
};

export type BookLogCreateOrConnectWithoutUserInput = {
  create: BookLogUncheckedCreateWithoutUserInput;
  where: BookLogWhereUniqueInput;
};

export type BookLogCreateWithoutBookInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  log: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutBookLogsInput;
};

export type BookLogCreateWithoutUserInput = {
  book: BookCreateNestedOneWithoutBookLogsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  log: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BookLogListRelationFilter = {
  every?: InputMaybe<BookLogWhereInput>;
  none?: InputMaybe<BookLogWhereInput>;
  some?: InputMaybe<BookLogWhereInput>;
};

export type BookLogMaxAggregateOutputType = {
  __typename?: 'BookLogMaxAggregateOutputType';
  bookId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  log?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type BookLogMaxOrderByAggregateInput = {
  bookId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  log?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookLogMinAggregateOutputType = {
  __typename?: 'BookLogMinAggregateOutputType';
  bookId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  log?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type BookLogMinOrderByAggregateInput = {
  bookId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  log?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookLogOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BookLogOrderByWithAggregationInput = {
  _count?: InputMaybe<BookLogCountOrderByAggregateInput>;
  _max?: InputMaybe<BookLogMaxOrderByAggregateInput>;
  _min?: InputMaybe<BookLogMinOrderByAggregateInput>;
  bookId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  log?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookLogOrderByWithRelationInput = {
  book?: InputMaybe<BookOrderByWithRelationInput>;
  bookId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  log?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum BookLogScalarFieldEnum {
  BookId = 'bookId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Log = 'log',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type BookLogScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<BookLogScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<BookLogScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<BookLogScalarWhereInput>>>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  log?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type BookLogScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<BookLogScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<BookLogScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<BookLogScalarWhereWithAggregatesInput>>>;
  bookId?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  log?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type BookLogUncheckedCreateInput = {
  bookId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  log: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type BookLogUncheckedCreateNestedManyWithoutBookInput = {
  connect?: InputMaybe<Array<InputMaybe<BookLogWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<BookLogCreateOrConnectWithoutBookInput>>>;
  create?: InputMaybe<Array<InputMaybe<BookLogCreateWithoutBookInput>>>;
  createMany?: InputMaybe<BookLogCreateManyBookInputEnvelope>;
};

export type BookLogUncheckedCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<BookLogWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<BookLogCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<BookLogCreateWithoutUserInput>>>;
  createMany?: InputMaybe<BookLogCreateManyUserInputEnvelope>;
};

export type BookLogUncheckedCreateWithoutBookInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  log: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type BookLogUncheckedCreateWithoutUserInput = {
  bookId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  log: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BookLogUncheckedUpdateInput = {
  bookId?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  log?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BookLogUncheckedUpdateManyInput = {
  bookId?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  log?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BookLogUncheckedUpdateManyWithoutBookInput = {
  connect?: InputMaybe<Array<InputMaybe<BookLogWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<BookLogCreateOrConnectWithoutBookInput>>>;
  create?: InputMaybe<Array<InputMaybe<BookLogCreateWithoutBookInput>>>;
  createMany?: InputMaybe<BookLogCreateManyBookInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<BookLogWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<BookLogScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<BookLogWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<BookLogWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<BookLogUpdateWithWhereUniqueWithoutBookInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<BookLogUpdateManyWithWhereWithoutBookInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<BookLogUpsertWithWhereUniqueWithoutBookInput>>>;
};

export type BookLogUncheckedUpdateManyWithoutBookLogsInput = {
  bookId?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  log?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookLogUncheckedUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<BookLogWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<BookLogCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<BookLogCreateWithoutUserInput>>>;
  createMany?: InputMaybe<BookLogCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<BookLogWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<BookLogScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<BookLogWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<BookLogWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<BookLogUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<BookLogUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<BookLogUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type BookLogUncheckedUpdateWithoutBookInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  log?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BookLogUncheckedUpdateWithoutUserInput = {
  bookId?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  log?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookLogUpdateInput = {
  book?: InputMaybe<BookUpdateOneRequiredWithoutBookLogsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  log?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutBookLogsInput>;
};

export type BookLogUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  log?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookLogUpdateManyWithWhereWithoutBookInput = {
  data: BookLogUncheckedUpdateManyWithoutBookLogsInput;
  where: BookLogScalarWhereInput;
};

export type BookLogUpdateManyWithWhereWithoutUserInput = {
  data: BookLogUncheckedUpdateManyWithoutBookLogsInput;
  where: BookLogScalarWhereInput;
};

export type BookLogUpdateManyWithoutBookInput = {
  connect?: InputMaybe<Array<InputMaybe<BookLogWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<BookLogCreateOrConnectWithoutBookInput>>>;
  create?: InputMaybe<Array<InputMaybe<BookLogCreateWithoutBookInput>>>;
  createMany?: InputMaybe<BookLogCreateManyBookInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<BookLogWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<BookLogScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<BookLogWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<BookLogWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<BookLogUpdateWithWhereUniqueWithoutBookInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<BookLogUpdateManyWithWhereWithoutBookInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<BookLogUpsertWithWhereUniqueWithoutBookInput>>>;
};

export type BookLogUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<BookLogWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<BookLogCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<BookLogCreateWithoutUserInput>>>;
  createMany?: InputMaybe<BookLogCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<BookLogWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<BookLogScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<BookLogWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<BookLogWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<BookLogUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<BookLogUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<BookLogUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type BookLogUpdateWithWhereUniqueWithoutBookInput = {
  data: BookLogUncheckedUpdateWithoutBookInput;
  where: BookLogWhereUniqueInput;
};

export type BookLogUpdateWithWhereUniqueWithoutUserInput = {
  data: BookLogUncheckedUpdateWithoutUserInput;
  where: BookLogWhereUniqueInput;
};

export type BookLogUpdateWithoutBookInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  log?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutBookLogsInput>;
};

export type BookLogUpdateWithoutUserInput = {
  book?: InputMaybe<BookUpdateOneRequiredWithoutBookLogsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  log?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookLogUpsertWithWhereUniqueWithoutBookInput = {
  create: BookLogUncheckedCreateWithoutBookInput;
  update: BookLogUncheckedUpdateWithoutBookInput;
  where: BookLogWhereUniqueInput;
};

export type BookLogUpsertWithWhereUniqueWithoutUserInput = {
  create: BookLogUncheckedCreateWithoutUserInput;
  update: BookLogUncheckedUpdateWithoutUserInput;
  where: BookLogWhereUniqueInput;
};

export type BookLogWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<BookLogWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<BookLogWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<BookLogWhereInput>>>;
  book?: InputMaybe<BookWhereInput>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  log?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

export type BookLogWhereUniqueInput = {
  bookUserId?: InputMaybe<BookLogBookUserIdCompoundUniqueInput>;
  id?: InputMaybe<Scalars['String']>;
};

export type BookMaxAggregateOutputType = {
  __typename?: 'BookMaxAggregateOutputType';
  bookLogCount?: Maybe<Scalars['Int']>;
  bookshelfCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type BookMaxOrderByAggregateInput = {
  bookLogCount?: InputMaybe<SortOrder>;
  bookshelfCount?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type BookMinAggregateOutputType = {
  __typename?: 'BookMinAggregateOutputType';
  bookLogCount?: Maybe<Scalars['Int']>;
  bookshelfCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type BookMinOrderByAggregateInput = {
  bookLogCount?: InputMaybe<SortOrder>;
  bookshelfCount?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type BookOrderByWithAggregationInput = {
  _avg?: InputMaybe<BookAvgOrderByAggregateInput>;
  _count?: InputMaybe<BookCountOrderByAggregateInput>;
  _max?: InputMaybe<BookMaxOrderByAggregateInput>;
  _min?: InputMaybe<BookMinOrderByAggregateInput>;
  _sum?: InputMaybe<BookSumOrderByAggregateInput>;
  bookLogCount?: InputMaybe<SortOrder>;
  bookshelfCount?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type BookOrderByWithRelationInput = {
  bookContents?: InputMaybe<BookContentOrderByRelationAggregateInput>;
  bookLogCount?: InputMaybe<SortOrder>;
  bookLogs?: InputMaybe<BookLogOrderByRelationAggregateInput>;
  bookshelfCount?: InputMaybe<SortOrder>;
  bookshelfs?: InputMaybe<BookshelfOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type BookRelationFilter = {
  is?: InputMaybe<BookWhereInput>;
  isNot?: InputMaybe<BookWhereInput>;
};

export enum BookScalarFieldEnum {
  BookLogCount = 'bookLogCount',
  BookshelfCount = 'bookshelfCount',
  CreatedAt = 'createdAt',
  Id = 'id',
  Image = 'image',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  Url = 'url'
}

export type BookScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<BookScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<BookScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<BookScalarWhereWithAggregatesInput>>>;
  bookLogCount?: InputMaybe<IntWithAggregatesFilter>;
  bookshelfCount?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  image?: InputMaybe<StringWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  url?: InputMaybe<StringWithAggregatesFilter>;
};

export type BookSumAggregateOutputType = {
  __typename?: 'BookSumAggregateOutputType';
  bookLogCount?: Maybe<Scalars['Int']>;
  bookshelfCount?: Maybe<Scalars['Int']>;
};

export type BookSumOrderByAggregateInput = {
  bookLogCount?: InputMaybe<SortOrder>;
  bookshelfCount?: InputMaybe<SortOrder>;
};

export type BookUncheckedCreateInput = {
  bookContents?: InputMaybe<BookContentUncheckedCreateNestedManyWithoutBookInput>;
  bookLogCount: Scalars['Int'];
  bookLogs?: InputMaybe<BookLogUncheckedCreateNestedManyWithoutBookInput>;
  bookshelfCount: Scalars['Int'];
  bookshelfs?: InputMaybe<BookshelfUncheckedCreateNestedManyWithoutBookInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type BookUncheckedCreateWithoutBookContentsInput = {
  bookLogCount: Scalars['Int'];
  bookLogs?: InputMaybe<BookLogUncheckedCreateNestedManyWithoutBookInput>;
  bookshelfCount: Scalars['Int'];
  bookshelfs?: InputMaybe<BookshelfUncheckedCreateNestedManyWithoutBookInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type BookUncheckedCreateWithoutBookLogsInput = {
  bookContents?: InputMaybe<BookContentUncheckedCreateNestedManyWithoutBookInput>;
  bookLogCount: Scalars['Int'];
  bookshelfCount: Scalars['Int'];
  bookshelfs?: InputMaybe<BookshelfUncheckedCreateNestedManyWithoutBookInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type BookUncheckedCreateWithoutBookshelfsInput = {
  bookContents?: InputMaybe<BookContentUncheckedCreateNestedManyWithoutBookInput>;
  bookLogCount: Scalars['Int'];
  bookLogs?: InputMaybe<BookLogUncheckedCreateNestedManyWithoutBookInput>;
  bookshelfCount: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type BookUncheckedUpdateInput = {
  bookContents?: InputMaybe<BookContentUncheckedUpdateManyWithoutBookInput>;
  bookLogCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  bookLogs?: InputMaybe<BookLogUncheckedUpdateManyWithoutBookInput>;
  bookshelfCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  bookshelfs?: InputMaybe<BookshelfUncheckedUpdateManyWithoutBookInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BookUncheckedUpdateManyInput = {
  bookLogCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  bookshelfCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BookUncheckedUpdateWithoutBookContentsInput = {
  bookLogCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  bookLogs?: InputMaybe<BookLogUncheckedUpdateManyWithoutBookInput>;
  bookshelfCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  bookshelfs?: InputMaybe<BookshelfUncheckedUpdateManyWithoutBookInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BookUncheckedUpdateWithoutBookLogsInput = {
  bookContents?: InputMaybe<BookContentUncheckedUpdateManyWithoutBookInput>;
  bookLogCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  bookshelfCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  bookshelfs?: InputMaybe<BookshelfUncheckedUpdateManyWithoutBookInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BookUncheckedUpdateWithoutBookshelfsInput = {
  bookContents?: InputMaybe<BookContentUncheckedUpdateManyWithoutBookInput>;
  bookLogCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  bookLogs?: InputMaybe<BookLogUncheckedUpdateManyWithoutBookInput>;
  bookshelfCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BookUpdateInput = {
  bookContents?: InputMaybe<BookContentUpdateManyWithoutBookInput>;
  bookLogCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  bookLogs?: InputMaybe<BookLogUpdateManyWithoutBookInput>;
  bookshelfCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  bookshelfs?: InputMaybe<BookshelfUpdateManyWithoutBookInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BookUpdateManyMutationInput = {
  bookLogCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  bookshelfCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BookUpdateOneRequiredWithoutBookContentsInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutBookContentsInput>;
  create?: InputMaybe<BookUncheckedCreateWithoutBookContentsInput>;
  update?: InputMaybe<BookUncheckedUpdateWithoutBookContentsInput>;
  upsert?: InputMaybe<BookUpsertWithoutBookContentsInput>;
};

export type BookUpdateOneRequiredWithoutBookLogsInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutBookLogsInput>;
  create?: InputMaybe<BookUncheckedCreateWithoutBookLogsInput>;
  update?: InputMaybe<BookUncheckedUpdateWithoutBookLogsInput>;
  upsert?: InputMaybe<BookUpsertWithoutBookLogsInput>;
};

export type BookUpdateOneRequiredWithoutBookshelfsInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutBookshelfsInput>;
  create?: InputMaybe<BookUncheckedCreateWithoutBookshelfsInput>;
  update?: InputMaybe<BookUncheckedUpdateWithoutBookshelfsInput>;
  upsert?: InputMaybe<BookUpsertWithoutBookshelfsInput>;
};

export type BookUpdateWithoutBookContentsInput = {
  bookLogCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  bookLogs?: InputMaybe<BookLogUpdateManyWithoutBookInput>;
  bookshelfCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  bookshelfs?: InputMaybe<BookshelfUpdateManyWithoutBookInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BookUpdateWithoutBookLogsInput = {
  bookContents?: InputMaybe<BookContentUpdateManyWithoutBookInput>;
  bookLogCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  bookshelfCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  bookshelfs?: InputMaybe<BookshelfUpdateManyWithoutBookInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BookUpdateWithoutBookshelfsInput = {
  bookContents?: InputMaybe<BookContentUpdateManyWithoutBookInput>;
  bookLogCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  bookLogs?: InputMaybe<BookLogUpdateManyWithoutBookInput>;
  bookshelfCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BookUpsertWithoutBookContentsInput = {
  create: BookUncheckedCreateWithoutBookContentsInput;
  update: BookUncheckedUpdateWithoutBookContentsInput;
};

export type BookUpsertWithoutBookLogsInput = {
  create: BookUncheckedCreateWithoutBookLogsInput;
  update: BookUncheckedUpdateWithoutBookLogsInput;
};

export type BookUpsertWithoutBookshelfsInput = {
  create: BookUncheckedCreateWithoutBookshelfsInput;
  update: BookUncheckedUpdateWithoutBookshelfsInput;
};

export type BookWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<BookWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<BookWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<BookWhereInput>>>;
  bookContents?: InputMaybe<BookContentListRelationFilter>;
  bookLogCount?: InputMaybe<IntFilter>;
  bookLogs?: InputMaybe<BookLogListRelationFilter>;
  bookshelfCount?: InputMaybe<IntFilter>;
  bookshelfs?: InputMaybe<BookshelfListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  url?: InputMaybe<StringFilter>;
};

export type BookWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
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

export type BookshelfBookIdUserIdCompoundUniqueInput = {
  bookId: Scalars['String'];
  userId: Scalars['String'];
};

export type BookshelfCountAggregateOutputType = {
  __typename?: 'BookshelfCountAggregateOutputType';
  _all: Scalars['Int'];
  bookId: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type BookshelfCountOrderByAggregateInput = {
  bookId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookshelfCreateInput = {
  book: BookCreateNestedOneWithoutBookshelfsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutBookshelfsInput;
};

export type BookshelfCreateManyBookInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type BookshelfCreateManyBookInputEnvelope = {
  data: BookshelfCreateManyBookInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BookshelfCreateManyInput = {
  bookId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type BookshelfCreateManyUserInput = {
  bookId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BookshelfCreateManyUserInputEnvelope = {
  data: BookshelfCreateManyUserInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BookshelfCreateNestedManyWithoutBookInput = {
  connect?: InputMaybe<Array<InputMaybe<BookshelfWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<BookshelfCreateOrConnectWithoutBookInput>>>;
  create?: InputMaybe<Array<InputMaybe<BookshelfCreateWithoutBookInput>>>;
  createMany?: InputMaybe<BookshelfCreateManyBookInputEnvelope>;
};

export type BookshelfCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<BookshelfWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<BookshelfCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<BookshelfCreateWithoutUserInput>>>;
  createMany?: InputMaybe<BookshelfCreateManyUserInputEnvelope>;
};

export type BookshelfCreateOrConnectWithoutBookInput = {
  create: BookshelfUncheckedCreateWithoutBookInput;
  where: BookshelfWhereUniqueInput;
};

export type BookshelfCreateOrConnectWithoutUserInput = {
  create: BookshelfUncheckedCreateWithoutUserInput;
  where: BookshelfWhereUniqueInput;
};

export type BookshelfCreateWithoutBookInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutBookshelfsInput;
};

export type BookshelfCreateWithoutUserInput = {
  book: BookCreateNestedOneWithoutBookshelfsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BookshelfListRelationFilter = {
  every?: InputMaybe<BookshelfWhereInput>;
  none?: InputMaybe<BookshelfWhereInput>;
  some?: InputMaybe<BookshelfWhereInput>;
};

export type BookshelfMaxAggregateOutputType = {
  __typename?: 'BookshelfMaxAggregateOutputType';
  bookId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type BookshelfMaxOrderByAggregateInput = {
  bookId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookshelfMinAggregateOutputType = {
  __typename?: 'BookshelfMinAggregateOutputType';
  bookId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type BookshelfMinOrderByAggregateInput = {
  bookId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookshelfOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BookshelfOrderByWithAggregationInput = {
  _count?: InputMaybe<BookshelfCountOrderByAggregateInput>;
  _max?: InputMaybe<BookshelfMaxOrderByAggregateInput>;
  _min?: InputMaybe<BookshelfMinOrderByAggregateInput>;
  bookId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookshelfOrderByWithRelationInput = {
  book?: InputMaybe<BookOrderByWithRelationInput>;
  bookId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum BookshelfScalarFieldEnum {
  BookId = 'bookId',
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type BookshelfScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<BookshelfScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<BookshelfScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<BookshelfScalarWhereInput>>>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type BookshelfScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<BookshelfScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<BookshelfScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<BookshelfScalarWhereWithAggregatesInput>>>;
  bookId?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type BookshelfUncheckedCreateInput = {
  bookId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type BookshelfUncheckedCreateNestedManyWithoutBookInput = {
  connect?: InputMaybe<Array<InputMaybe<BookshelfWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<BookshelfCreateOrConnectWithoutBookInput>>>;
  create?: InputMaybe<Array<InputMaybe<BookshelfCreateWithoutBookInput>>>;
  createMany?: InputMaybe<BookshelfCreateManyBookInputEnvelope>;
};

export type BookshelfUncheckedCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<BookshelfWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<BookshelfCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<BookshelfCreateWithoutUserInput>>>;
  createMany?: InputMaybe<BookshelfCreateManyUserInputEnvelope>;
};

export type BookshelfUncheckedCreateWithoutBookInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type BookshelfUncheckedCreateWithoutUserInput = {
  bookId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BookshelfUncheckedUpdateInput = {
  bookId?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BookshelfUncheckedUpdateManyInput = {
  bookId?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BookshelfUncheckedUpdateManyWithoutBookInput = {
  connect?: InputMaybe<Array<InputMaybe<BookshelfWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<BookshelfCreateOrConnectWithoutBookInput>>>;
  create?: InputMaybe<Array<InputMaybe<BookshelfCreateWithoutBookInput>>>;
  createMany?: InputMaybe<BookshelfCreateManyBookInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<BookshelfWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<BookshelfScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<BookshelfWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<BookshelfWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<BookshelfUpdateWithWhereUniqueWithoutBookInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<BookshelfUpdateManyWithWhereWithoutBookInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<BookshelfUpsertWithWhereUniqueWithoutBookInput>>>;
};

export type BookshelfUncheckedUpdateManyWithoutBookshelfsInput = {
  bookId?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookshelfUncheckedUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<BookshelfWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<BookshelfCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<BookshelfCreateWithoutUserInput>>>;
  createMany?: InputMaybe<BookshelfCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<BookshelfWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<BookshelfScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<BookshelfWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<BookshelfWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<BookshelfUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<BookshelfUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<BookshelfUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type BookshelfUncheckedUpdateWithoutBookInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BookshelfUncheckedUpdateWithoutUserInput = {
  bookId?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookshelfUpdateInput = {
  book?: InputMaybe<BookUpdateOneRequiredWithoutBookshelfsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutBookshelfsInput>;
};

export type BookshelfUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookshelfUpdateManyWithWhereWithoutBookInput = {
  data: BookshelfUncheckedUpdateManyWithoutBookshelfsInput;
  where: BookshelfScalarWhereInput;
};

export type BookshelfUpdateManyWithWhereWithoutUserInput = {
  data: BookshelfUncheckedUpdateManyWithoutBookshelfsInput;
  where: BookshelfScalarWhereInput;
};

export type BookshelfUpdateManyWithoutBookInput = {
  connect?: InputMaybe<Array<InputMaybe<BookshelfWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<BookshelfCreateOrConnectWithoutBookInput>>>;
  create?: InputMaybe<Array<InputMaybe<BookshelfCreateWithoutBookInput>>>;
  createMany?: InputMaybe<BookshelfCreateManyBookInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<BookshelfWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<BookshelfScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<BookshelfWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<BookshelfWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<BookshelfUpdateWithWhereUniqueWithoutBookInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<BookshelfUpdateManyWithWhereWithoutBookInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<BookshelfUpsertWithWhereUniqueWithoutBookInput>>>;
};

export type BookshelfUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<BookshelfWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<BookshelfCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<BookshelfCreateWithoutUserInput>>>;
  createMany?: InputMaybe<BookshelfCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<BookshelfWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<BookshelfScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<BookshelfWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<BookshelfWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<BookshelfUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<BookshelfUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<BookshelfUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type BookshelfUpdateWithWhereUniqueWithoutBookInput = {
  data: BookshelfUncheckedUpdateWithoutBookInput;
  where: BookshelfWhereUniqueInput;
};

export type BookshelfUpdateWithWhereUniqueWithoutUserInput = {
  data: BookshelfUncheckedUpdateWithoutUserInput;
  where: BookshelfWhereUniqueInput;
};

export type BookshelfUpdateWithoutBookInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutBookshelfsInput>;
};

export type BookshelfUpdateWithoutUserInput = {
  book?: InputMaybe<BookUpdateOneRequiredWithoutBookshelfsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookshelfUpsertWithWhereUniqueWithoutBookInput = {
  create: BookshelfUncheckedCreateWithoutBookInput;
  update: BookshelfUncheckedUpdateWithoutBookInput;
  where: BookshelfWhereUniqueInput;
};

export type BookshelfUpsertWithWhereUniqueWithoutUserInput = {
  create: BookshelfUncheckedCreateWithoutUserInput;
  update: BookshelfUncheckedUpdateWithoutUserInput;
  where: BookshelfWhereUniqueInput;
};

export type BookshelfWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<BookshelfWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<BookshelfWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<BookshelfWhereInput>>>;
  book?: InputMaybe<BookWhereInput>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

export type BookshelfWhereUniqueInput = {
  bookId_userId?: InputMaybe<BookshelfBookIdUserIdCompoundUniqueInput>;
  id?: InputMaybe<Scalars['String']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type File = {
  __typename?: 'File';
  encoding: Scalars['String'];
  filename: Scalars['String'];
  id: Scalars['ID'];
  mimetype: Scalars['String'];
  path: Scalars['String'];
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']>;
  divide?: InputMaybe<Scalars['Float']>;
  increment?: InputMaybe<Scalars['Float']>;
  multiply?: InputMaybe<Scalars['Float']>;
  set?: InputMaybe<Scalars['Float']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBookLog: BookLog;
  image: File;
  onboardUser: User;
  resetUser: User;
  updateBookLog: BookLog;
};


export type MutationCreateBookLogArgs = {
  bookId: Scalars['String'];
  log: Scalars['String'];
};


export type MutationImageArgs = {
  image?: InputMaybe<Scalars['Upload']>;
};


export type MutationOnboardUserArgs = {
  image?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationResetUserArgs = {
  userId: Scalars['String'];
};


export type MutationUpdateBookLogArgs = {
  bookLogId: Scalars['String'];
  log: Scalars['String'];
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type NestedFloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  book: Book;
  bookContents: Array<BookContent>;
  bookLog?: Maybe<BookLog>;
  bookLogs: Array<BookLog>;
  books: Array<Book>;
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
  bookId: Scalars['String'];
  userId: Scalars['String'];
};


export type QueryBookLogsArgs = {
  userId: Scalars['String'];
};


export type QueryBooksArgs = {
  keyword?: InputMaybe<Scalars['String']>;
};


export type QueryBookshelfsArgs = {
  userId: Scalars['String'];
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

export type SessionCountAggregateOutputType = {
  __typename?: 'SessionCountAggregateOutputType';
  _all: Scalars['Int'];
  expires: Scalars['Int'];
  id: Scalars['Int'];
  sessionToken: Scalars['Int'];
  userId: Scalars['Int'];
};

export type SessionCountOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionCreateInput = {
  expires: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  sessionToken: Scalars['String'];
  user: UserCreateNestedOneWithoutSessionsInput;
};

export type SessionCreateManyInput = {
  expires: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  sessionToken: Scalars['String'];
  userId: Scalars['String'];
};

export type SessionCreateManyUserInput = {
  expires: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  sessionToken: Scalars['String'];
};

export type SessionCreateManyUserInputEnvelope = {
  data: SessionCreateManyUserInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type SessionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<SessionWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<SessionCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<SessionCreateWithoutUserInput>>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
};

export type SessionCreateOrConnectWithoutUserInput = {
  create: SessionUncheckedCreateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionCreateWithoutUserInput = {
  expires: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  sessionToken: Scalars['String'];
};

export type SessionListRelationFilter = {
  every?: InputMaybe<SessionWhereInput>;
  none?: InputMaybe<SessionWhereInput>;
  some?: InputMaybe<SessionWhereInput>;
};

export type SessionMaxAggregateOutputType = {
  __typename?: 'SessionMaxAggregateOutputType';
  expires?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  sessionToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type SessionMaxOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionMinAggregateOutputType = {
  __typename?: 'SessionMinAggregateOutputType';
  expires?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  sessionToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type SessionMinOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SessionOrderByWithAggregationInput = {
  _count?: InputMaybe<SessionCountOrderByAggregateInput>;
  _max?: InputMaybe<SessionMaxOrderByAggregateInput>;
  _min?: InputMaybe<SessionMinOrderByAggregateInput>;
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionOrderByWithRelationInput = {
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum SessionScalarFieldEnum {
  Expires = 'expires',
  Id = 'id',
  SessionToken = 'sessionToken',
  UserId = 'userId'
}

export type SessionScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<SessionScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<SessionScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<SessionScalarWhereInput>>>;
  expires?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SessionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<SessionScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<SessionScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<SessionScalarWhereWithAggregatesInput>>>;
  expires?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  sessionToken?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type SessionUncheckedCreateInput = {
  expires: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  sessionToken: Scalars['String'];
  userId: Scalars['String'];
};

export type SessionUncheckedCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<SessionWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<SessionCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<SessionCreateWithoutUserInput>>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
};

export type SessionUncheckedCreateWithoutUserInput = {
  expires: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  sessionToken: Scalars['String'];
};

export type SessionUncheckedUpdateInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SessionUncheckedUpdateManyInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SessionUncheckedUpdateManyWithoutSessionsInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SessionUncheckedUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<SessionWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<SessionCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<SessionCreateWithoutUserInput>>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<SessionWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<SessionScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<SessionWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<SessionWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<SessionUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<SessionUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<SessionUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type SessionUncheckedUpdateWithoutUserInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SessionUpdateInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSessionsInput>;
};

export type SessionUpdateManyMutationInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SessionUpdateManyWithWhereWithoutUserInput = {
  data: SessionUncheckedUpdateManyWithoutSessionsInput;
  where: SessionScalarWhereInput;
};

export type SessionUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<SessionWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<SessionCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<SessionCreateWithoutUserInput>>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<SessionWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<SessionScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<SessionWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<SessionWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<SessionUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<SessionUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<SessionUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type SessionUpdateWithWhereUniqueWithoutUserInput = {
  data: SessionUncheckedUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionUpdateWithoutUserInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SessionUpsertWithWhereUniqueWithoutUserInput = {
  create: SessionUncheckedCreateWithoutUserInput;
  update: SessionUncheckedUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<SessionWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<SessionWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<SessionWhereInput>>>;
  expires?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

export type SessionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  sessionToken?: InputMaybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type TopicsAvgAggregateOutputType = {
  __typename?: 'TopicsAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
};

export type TopicsCountAggregateOutputType = {
  __typename?: 'TopicsCountAggregateOutputType';
  _all: Scalars['Int'];
  content: Scalars['Int'];
  id: Scalars['Int'];
  likes: Scalars['Int'];
};

export type TopicsMaxAggregateOutputType = {
  __typename?: 'TopicsMaxAggregateOutputType';
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
};

export type TopicsMinAggregateOutputType = {
  __typename?: 'TopicsMinAggregateOutputType';
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
};

export enum TopicsScalarFieldEnum {
  Content = 'content',
  Id = 'id',
  Likes = 'likes'
}

export type TopicsSumAggregateOutputType = {
  __typename?: 'TopicsSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
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

export type UserCountAggregateOutputType = {
  __typename?: 'UserCountAggregateOutputType';
  _all: Scalars['Int'];
  email: Scalars['Int'];
  emailVerified: Scalars['Int'];
  id: Scalars['Int'];
  image: Scalars['Int'];
  name: Scalars['Int'];
  onboarding: Scalars['Int'];
  profile: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  onboarding?: InputMaybe<SortOrder>;
  profile?: InputMaybe<SortOrder>;
};

export type UserCountOutputType = {
  __typename?: 'UserCountOutputType';
  accounts: Scalars['Int'];
  bookLogs: Scalars['Int'];
  bookshelfs: Scalars['Int'];
  sessions: Scalars['Int'];
};

export type UserCreateInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  bookLogs?: InputMaybe<BookLogCreateNestedManyWithoutUserInput>;
  bookshelfs?: InputMaybe<BookshelfCreateNestedManyWithoutUserInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  onboarding?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['String']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
};

export type UserCreateManyInput = {
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  onboarding?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['String']>;
};

export type UserCreateNestedOneWithoutAccountsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAccountsInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutAccountsInput>;
};

export type UserCreateNestedOneWithoutBookLogsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutBookLogsInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutBookLogsInput>;
};

export type UserCreateNestedOneWithoutBookshelfsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutBookshelfsInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutBookshelfsInput>;
};

export type UserCreateNestedOneWithoutSessionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSessionsInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutSessionsInput>;
};

export type UserCreateOrConnectWithoutAccountsInput = {
  create: UserUncheckedCreateWithoutAccountsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutBookLogsInput = {
  create: UserUncheckedCreateWithoutBookLogsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutBookshelfsInput = {
  create: UserUncheckedCreateWithoutBookshelfsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSessionsInput = {
  create: UserUncheckedCreateWithoutSessionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAccountsInput = {
  bookLogs?: InputMaybe<BookLogCreateNestedManyWithoutUserInput>;
  bookshelfs?: InputMaybe<BookshelfCreateNestedManyWithoutUserInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  onboarding?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['String']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutBookLogsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  bookshelfs?: InputMaybe<BookshelfCreateNestedManyWithoutUserInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  onboarding?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['String']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutBookshelfsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  bookLogs?: InputMaybe<BookLogCreateNestedManyWithoutUserInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  onboarding?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['String']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutSessionsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  bookLogs?: InputMaybe<BookLogCreateNestedManyWithoutUserInput>;
  bookshelfs?: InputMaybe<BookshelfCreateNestedManyWithoutUserInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  onboarding?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['String']>;
};

export type UserMaxAggregateOutputType = {
  __typename?: 'UserMaxAggregateOutputType';
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  onboarding?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
};

export type UserMaxOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  onboarding?: InputMaybe<SortOrder>;
  profile?: InputMaybe<SortOrder>;
};

export type UserMinAggregateOutputType = {
  __typename?: 'UserMinAggregateOutputType';
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  onboarding?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
};

export type UserMinOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  onboarding?: InputMaybe<SortOrder>;
  profile?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  onboarding?: InputMaybe<SortOrder>;
  profile?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  accounts?: InputMaybe<AccountOrderByRelationAggregateInput>;
  bookLogs?: InputMaybe<BookLogOrderByRelationAggregateInput>;
  bookshelfs?: InputMaybe<BookshelfOrderByRelationAggregateInput>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  onboarding?: InputMaybe<SortOrder>;
  profile?: InputMaybe<SortOrder>;
  sessions?: InputMaybe<SessionOrderByRelationAggregateInput>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Email = 'email',
  EmailVerified = 'emailVerified',
  Id = 'id',
  Image = 'image',
  Name = 'name',
  Onboarding = 'onboarding',
  Profile = 'profile'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<UserScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserScalarWhereWithAggregatesInput>>>;
  email?: InputMaybe<StringNullableWithAggregatesFilter>;
  emailVerified?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  image?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  onboarding?: InputMaybe<StringNullableWithAggregatesFilter>;
  profile?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type UserUncheckedCreateInput = {
  accounts?: InputMaybe<AccountUncheckedCreateNestedManyWithoutUserInput>;
  bookLogs?: InputMaybe<BookLogUncheckedCreateNestedManyWithoutUserInput>;
  bookshelfs?: InputMaybe<BookshelfUncheckedCreateNestedManyWithoutUserInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  onboarding?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['String']>;
  sessions?: InputMaybe<SessionUncheckedCreateNestedManyWithoutUserInput>;
};

export type UserUncheckedCreateWithoutAccountsInput = {
  bookLogs?: InputMaybe<BookLogUncheckedCreateNestedManyWithoutUserInput>;
  bookshelfs?: InputMaybe<BookshelfUncheckedCreateNestedManyWithoutUserInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  onboarding?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['String']>;
  sessions?: InputMaybe<SessionUncheckedCreateNestedManyWithoutUserInput>;
};

export type UserUncheckedCreateWithoutBookLogsInput = {
  accounts?: InputMaybe<AccountUncheckedCreateNestedManyWithoutUserInput>;
  bookshelfs?: InputMaybe<BookshelfUncheckedCreateNestedManyWithoutUserInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  onboarding?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['String']>;
  sessions?: InputMaybe<SessionUncheckedCreateNestedManyWithoutUserInput>;
};

export type UserUncheckedCreateWithoutBookshelfsInput = {
  accounts?: InputMaybe<AccountUncheckedCreateNestedManyWithoutUserInput>;
  bookLogs?: InputMaybe<BookLogUncheckedCreateNestedManyWithoutUserInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  onboarding?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['String']>;
  sessions?: InputMaybe<SessionUncheckedCreateNestedManyWithoutUserInput>;
};

export type UserUncheckedCreateWithoutSessionsInput = {
  accounts?: InputMaybe<AccountUncheckedCreateNestedManyWithoutUserInput>;
  bookLogs?: InputMaybe<BookLogUncheckedCreateNestedManyWithoutUserInput>;
  bookshelfs?: InputMaybe<BookshelfUncheckedCreateNestedManyWithoutUserInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  onboarding?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['String']>;
};

export type UserUncheckedUpdateInput = {
  accounts?: InputMaybe<AccountUncheckedUpdateManyWithoutUserInput>;
  bookLogs?: InputMaybe<BookLogUncheckedUpdateManyWithoutUserInput>;
  bookshelfs?: InputMaybe<BookshelfUncheckedUpdateManyWithoutUserInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  onboarding?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  profile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUncheckedUpdateManyWithoutUserInput>;
};

export type UserUncheckedUpdateManyInput = {
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  onboarding?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  profile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutAccountsInput = {
  bookLogs?: InputMaybe<BookLogUncheckedUpdateManyWithoutUserInput>;
  bookshelfs?: InputMaybe<BookshelfUncheckedUpdateManyWithoutUserInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  onboarding?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  profile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUncheckedUpdateManyWithoutUserInput>;
};

export type UserUncheckedUpdateWithoutBookLogsInput = {
  accounts?: InputMaybe<AccountUncheckedUpdateManyWithoutUserInput>;
  bookshelfs?: InputMaybe<BookshelfUncheckedUpdateManyWithoutUserInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  onboarding?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  profile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUncheckedUpdateManyWithoutUserInput>;
};

export type UserUncheckedUpdateWithoutBookshelfsInput = {
  accounts?: InputMaybe<AccountUncheckedUpdateManyWithoutUserInput>;
  bookLogs?: InputMaybe<BookLogUncheckedUpdateManyWithoutUserInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  onboarding?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  profile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUncheckedUpdateManyWithoutUserInput>;
};

export type UserUncheckedUpdateWithoutSessionsInput = {
  accounts?: InputMaybe<AccountUncheckedUpdateManyWithoutUserInput>;
  bookLogs?: InputMaybe<BookLogUncheckedUpdateManyWithoutUserInput>;
  bookshelfs?: InputMaybe<BookshelfUncheckedUpdateManyWithoutUserInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  onboarding?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  profile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserInput>;
  bookLogs?: InputMaybe<BookLogUpdateManyWithoutUserInput>;
  bookshelfs?: InputMaybe<BookshelfUpdateManyWithoutUserInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  onboarding?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  profile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserInput>;
};

export type UserUpdateManyMutationInput = {
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  onboarding?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  profile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutAccountsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAccountsInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutAccountsInput>;
  update?: InputMaybe<UserUncheckedUpdateWithoutAccountsInput>;
  upsert?: InputMaybe<UserUpsertWithoutAccountsInput>;
};

export type UserUpdateOneRequiredWithoutBookLogsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutBookLogsInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutBookLogsInput>;
  update?: InputMaybe<UserUncheckedUpdateWithoutBookLogsInput>;
  upsert?: InputMaybe<UserUpsertWithoutBookLogsInput>;
};

export type UserUpdateOneRequiredWithoutBookshelfsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutBookshelfsInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutBookshelfsInput>;
  update?: InputMaybe<UserUncheckedUpdateWithoutBookshelfsInput>;
  upsert?: InputMaybe<UserUpsertWithoutBookshelfsInput>;
};

export type UserUpdateOneRequiredWithoutSessionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSessionsInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutSessionsInput>;
  update?: InputMaybe<UserUncheckedUpdateWithoutSessionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutSessionsInput>;
};

export type UserUpdateWithoutAccountsInput = {
  bookLogs?: InputMaybe<BookLogUpdateManyWithoutUserInput>;
  bookshelfs?: InputMaybe<BookshelfUpdateManyWithoutUserInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  onboarding?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  profile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutBookLogsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserInput>;
  bookshelfs?: InputMaybe<BookshelfUpdateManyWithoutUserInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  onboarding?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  profile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutBookshelfsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserInput>;
  bookLogs?: InputMaybe<BookLogUpdateManyWithoutUserInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  onboarding?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  profile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutSessionsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserInput>;
  bookLogs?: InputMaybe<BookLogUpdateManyWithoutUserInput>;
  bookshelfs?: InputMaybe<BookshelfUpdateManyWithoutUserInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  onboarding?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  profile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutAccountsInput = {
  create: UserUncheckedCreateWithoutAccountsInput;
  update: UserUncheckedUpdateWithoutAccountsInput;
};

export type UserUpsertWithoutBookLogsInput = {
  create: UserUncheckedCreateWithoutBookLogsInput;
  update: UserUncheckedUpdateWithoutBookLogsInput;
};

export type UserUpsertWithoutBookshelfsInput = {
  create: UserUncheckedCreateWithoutBookshelfsInput;
  update: UserUncheckedUpdateWithoutBookshelfsInput;
};

export type UserUpsertWithoutSessionsInput = {
  create: UserUncheckedCreateWithoutSessionsInput;
  update: UserUncheckedUpdateWithoutSessionsInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  bookLogs?: InputMaybe<BookLogListRelationFilter>;
  bookshelfs?: InputMaybe<BookshelfListRelationFilter>;
  email?: InputMaybe<StringNullableFilter>;
  emailVerified?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  onboarding?: InputMaybe<StringNullableFilter>;
  profile?: InputMaybe<StringNullableFilter>;
  sessions?: InputMaybe<SessionListRelationFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type UsersAvgAggregateOutputType = {
  __typename?: 'UsersAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
};

export type UsersCountAggregateOutputType = {
  __typename?: 'UsersCountAggregateOutputType';
  _all: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  password: Scalars['Int'];
};

export type UsersMaxAggregateOutputType = {
  __typename?: 'UsersMaxAggregateOutputType';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UsersMinAggregateOutputType = {
  __typename?: 'UsersMinAggregateOutputType';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export enum UsersScalarFieldEnum {
  Email = 'email',
  Id = 'id',
  Name = 'name',
  Password = 'password'
}

export type UsersSumAggregateOutputType = {
  __typename?: 'UsersSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
};

export type VerificationToken = {
  __typename?: 'VerificationToken';
  expires: Scalars['DateTime'];
  identifier: Scalars['String'];
  token: Scalars['String'];
};

export type VerificationTokenCountAggregateOutputType = {
  __typename?: 'VerificationTokenCountAggregateOutputType';
  _all: Scalars['Int'];
  expires: Scalars['Int'];
  identifier: Scalars['Int'];
  token: Scalars['Int'];
};

export type VerificationTokenCountOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenCreateInput = {
  expires: Scalars['DateTime'];
  identifier: Scalars['String'];
  token: Scalars['String'];
};

export type VerificationTokenCreateManyInput = {
  expires: Scalars['DateTime'];
  identifier: Scalars['String'];
  token: Scalars['String'];
};

export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
  identifier: Scalars['String'];
  token: Scalars['String'];
};

export type VerificationTokenMaxAggregateOutputType = {
  __typename?: 'VerificationTokenMaxAggregateOutputType';
  expires?: Maybe<Scalars['DateTime']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type VerificationTokenMaxOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenMinAggregateOutputType = {
  __typename?: 'VerificationTokenMinAggregateOutputType';
  expires?: Maybe<Scalars['DateTime']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type VerificationTokenMinOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenOrderByWithAggregationInput = {
  _count?: InputMaybe<VerificationTokenCountOrderByAggregateInput>;
  _max?: InputMaybe<VerificationTokenMaxOrderByAggregateInput>;
  _min?: InputMaybe<VerificationTokenMinOrderByAggregateInput>;
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenOrderByWithRelationInput = {
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export enum VerificationTokenScalarFieldEnum {
  Expires = 'expires',
  Identifier = 'identifier',
  Token = 'token'
}

export type VerificationTokenScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<VerificationTokenScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<VerificationTokenScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<VerificationTokenScalarWhereWithAggregatesInput>>>;
  expires?: InputMaybe<DateTimeWithAggregatesFilter>;
  identifier?: InputMaybe<StringWithAggregatesFilter>;
  token?: InputMaybe<StringWithAggregatesFilter>;
};

export type VerificationTokenUncheckedCreateInput = {
  expires: Scalars['DateTime'];
  identifier: Scalars['String'];
  token: Scalars['String'];
};

export type VerificationTokenUncheckedUpdateInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type VerificationTokenUncheckedUpdateManyInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type VerificationTokenUpdateInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type VerificationTokenUpdateManyMutationInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type VerificationTokenWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<VerificationTokenWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<VerificationTokenWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<VerificationTokenWhereInput>>>;
  expires?: InputMaybe<DateTimeFilter>;
  identifier?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
};

export type VerificationTokenWhereUniqueInput = {
  identifier_token?: InputMaybe<VerificationTokenIdentifierTokenCompoundUniqueInput>;
  token?: InputMaybe<Scalars['String']>;
};

export type TopicsAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  likes?: InputMaybe<SortOrder>;
};

export type TopicsCountOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  likes?: InputMaybe<SortOrder>;
};

export type TopicsCreateInput = {
  content: Scalars['String'];
  likes: Scalars['Int'];
};

export type TopicsCreateManyInput = {
  content: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  likes: Scalars['Int'];
};

export type TopicsMaxOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  likes?: InputMaybe<SortOrder>;
};

export type TopicsMinOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  likes?: InputMaybe<SortOrder>;
};

export type TopicsOrderByWithAggregationInput = {
  _avg?: InputMaybe<TopicsAvgOrderByAggregateInput>;
  _count?: InputMaybe<TopicsCountOrderByAggregateInput>;
  _max?: InputMaybe<TopicsMaxOrderByAggregateInput>;
  _min?: InputMaybe<TopicsMinOrderByAggregateInput>;
  _sum?: InputMaybe<TopicsSumOrderByAggregateInput>;
  content?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  likes?: InputMaybe<SortOrder>;
};

export type TopicsOrderByWithRelationInput = {
  content?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  likes?: InputMaybe<SortOrder>;
};

export type TopicsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<TopicsScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<TopicsScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<TopicsScalarWhereWithAggregatesInput>>>;
  content?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  likes?: InputMaybe<IntWithAggregatesFilter>;
};

export type TopicsSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  likes?: InputMaybe<SortOrder>;
};

export type TopicsUncheckedCreateInput = {
  content: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  likes: Scalars['Int'];
};

export type TopicsUncheckedUpdateInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  likes?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type TopicsUncheckedUpdateManyInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  likes?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type TopicsUpdateInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  likes?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type TopicsUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  likes?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type TopicsWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<TopicsWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<TopicsWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<TopicsWhereInput>>>;
  content?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  likes?: InputMaybe<IntFilter>;
};

export type TopicsWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type UsersAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UsersCountOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
};

export type UsersCreateInput = {
  email: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type UsersCreateManyInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type UsersMaxOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
};

export type UsersMinOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
};

export type UsersOrderByWithAggregationInput = {
  _avg?: InputMaybe<UsersAvgOrderByAggregateInput>;
  _count?: InputMaybe<UsersCountOrderByAggregateInput>;
  _max?: InputMaybe<UsersMaxOrderByAggregateInput>;
  _min?: InputMaybe<UsersMinOrderByAggregateInput>;
  _sum?: InputMaybe<UsersSumOrderByAggregateInput>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
};

export type UsersOrderByWithRelationInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
};

export type UsersScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<UsersScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UsersScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UsersScalarWhereWithAggregatesInput>>>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
};

export type UsersSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UsersUncheckedCreateInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type UsersUncheckedUpdateInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UsersUncheckedUpdateManyInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UsersUpdateInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UsersUpdateManyMutationInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UsersWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<UsersWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UsersWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UsersWhereInput>>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringFilter>;
};

export type UsersWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type CreateBookLogMutationVariables = Exact<{
  bookId: Scalars['String'];
  log: Scalars['String'];
}>;


export type CreateBookLogMutation = { __typename?: 'Mutation', createBookLog: { __typename?: 'BookLog', id: string } };

export type OnboardUserMutationVariables = Exact<{
  userId: Scalars['String'];
  name: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
}>;


export type OnboardUserMutation = { __typename?: 'Mutation', onboardUser: { __typename?: 'User', id: string } };

export type ResetUsernameMutationVariables = Exact<{
  userId: Scalars['String'];
}>;


export type ResetUsernameMutation = { __typename?: 'Mutation', resetUser: { __typename?: 'User', id: string } };

export type UpdateBookLogMutationVariables = Exact<{
  bookLogId: Scalars['String'];
  log: Scalars['String'];
}>;


export type UpdateBookLogMutation = { __typename?: 'Mutation', updateBookLog: { __typename?: 'BookLog', id: string } };

export type UpdateProfileImageMutationVariables = Exact<{
  image?: InputMaybe<Scalars['Upload']>;
}>;


export type UpdateProfileImageMutation = { __typename?: 'Mutation', image: { __typename?: 'File', id: string, path: string, filename: string, mimetype: string, encoding: string } };

export type FetchBookWithLogsQueryVariables = Exact<{
  bookId: Scalars['String'];
}>;


export type FetchBookWithLogsQuery = { __typename?: 'Query', book: { __typename?: 'Book', id: string, title: string, image: string, url: string, bookLogs: Array<{ __typename?: 'BookLog', id: string, log: string, updatedAt: any }> } };

export type FetchBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchBooksQuery = { __typename?: 'Query', books: Array<{ __typename?: 'Book', id: string, title: string, image: string, url: string, bookLogCount: number, bookshelfCount: number, createdAt: any, updatedAt: any }> };

export type FetchBookshelfBooksQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type FetchBookshelfBooksQuery = { __typename?: 'Query', bookshelfs: Array<{ __typename?: 'Bookshelf', id: string, userId: string, book: { __typename?: 'Book', id: string, title: string, image: string, bookLogCount: number, bookshelfCount: number } }> };

export type FetchEditBookLogInfoQueryVariables = Exact<{
  bookId: Scalars['String'];
  userId: Scalars['String'];
}>;


export type FetchEditBookLogInfoQuery = { __typename?: 'Query', bookLog?: { __typename?: 'BookLog', id: string, log: string } | null, book: { __typename?: 'Book', id: string, title: string, bookContents: Array<{ __typename?: 'BookContent', id: string, bookId: string, index: number, type: string, heading: string }> } };

export type FetchUserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type FetchUserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, name?: string | null, image?: string | null, bookshelfs: Array<{ __typename?: 'Bookshelf', id: string, book: { __typename?: 'Book', id: string, title: string, image: string, bookLogCount: number, bookshelfCount: number } }> } };

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


export const CreateBookLogDocument = gql`
    mutation CreateBookLog($bookId: String!, $log: String!) {
  createBookLog(bookId: $bookId, log: $log) {
    id
  }
}
    `;
export const OnboardUserDocument = gql`
    mutation OnboardUser($userId: String!, $name: String!, $image: String) {
  onboardUser(userId: $userId, name: $name, image: $image) {
    id
  }
}
    `;
export const ResetUsernameDocument = gql`
    mutation ResetUsername($userId: String!) {
  resetUser(userId: $userId) {
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
export const UpdateProfileImageDocument = gql`
    mutation UpdateProfileImage($image: Upload) {
  image(image: $image) {
    id
    path
    filename
    mimetype
    encoding
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
    }
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
export const FetchUserDocument = gql`
    query FetchUser($userId: String!) {
  user(userId: $userId) {
    id
    name
    image
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
    CreateBookLog(variables: CreateBookLogMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateBookLogMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateBookLogMutation>(CreateBookLogDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateBookLog', 'mutation');
    },
    OnboardUser(variables: OnboardUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<OnboardUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<OnboardUserMutation>(OnboardUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'OnboardUser', 'mutation');
    },
    ResetUsername(variables: ResetUsernameMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ResetUsernameMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ResetUsernameMutation>(ResetUsernameDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ResetUsername', 'mutation');
    },
    UpdateBookLog(variables: UpdateBookLogMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateBookLogMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateBookLogMutation>(UpdateBookLogDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateBookLog', 'mutation');
    },
    UpdateProfileImage(variables?: UpdateProfileImageMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateProfileImageMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateProfileImageMutation>(UpdateProfileImageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateProfileImage', 'mutation');
    },
    FetchBookWithLogs(variables: FetchBookWithLogsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FetchBookWithLogsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FetchBookWithLogsQuery>(FetchBookWithLogsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FetchBookWithLogs', 'query');
    },
    FetchBooks(variables?: FetchBooksQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FetchBooksQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FetchBooksQuery>(FetchBooksDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FetchBooks', 'query');
    },
    FetchBookshelfBooks(variables: FetchBookshelfBooksQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FetchBookshelfBooksQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FetchBookshelfBooksQuery>(FetchBookshelfBooksDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FetchBookshelfBooks', 'query');
    },
    FetchEditBookLogInfo(variables: FetchEditBookLogInfoQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FetchEditBookLogInfoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FetchEditBookLogInfoQuery>(FetchEditBookLogInfoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FetchEditBookLogInfo', 'query');
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
export function getSdkWithHooks(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  const sdk = getSdk(client, withWrapper);
  return {
    ...sdk,
    useFetchBookWithLogs(key: SWRKeyInterface, variables: FetchBookWithLogsQueryVariables, config?: SWRConfigInterface<FetchBookWithLogsQuery, ClientError>) {
      return useSWR<FetchBookWithLogsQuery, ClientError>(key, () => sdk.FetchBookWithLogs(variables), config);
    },
    useFetchBooks(key: SWRKeyInterface, variables?: FetchBooksQueryVariables, config?: SWRConfigInterface<FetchBooksQuery, ClientError>) {
      return useSWR<FetchBooksQuery, ClientError>(key, () => sdk.FetchBooks(variables), config);
    },
    useFetchBookshelfBooks(key: SWRKeyInterface, variables: FetchBookshelfBooksQueryVariables, config?: SWRConfigInterface<FetchBookshelfBooksQuery, ClientError>) {
      return useSWR<FetchBookshelfBooksQuery, ClientError>(key, () => sdk.FetchBookshelfBooks(variables), config);
    },
    useFetchEditBookLogInfo(key: SWRKeyInterface, variables: FetchEditBookLogInfoQueryVariables, config?: SWRConfigInterface<FetchEditBookLogInfoQuery, ClientError>) {
      return useSWR<FetchEditBookLogInfoQuery, ClientError>(key, () => sdk.FetchEditBookLogInfo(variables), config);
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