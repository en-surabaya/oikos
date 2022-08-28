import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ActivateUserInput = {
  activationToken: Scalars['String'];
  password: Scalars['String'];
  userId: Scalars['Int'];
  username: Scalars['String'];
};

export type CreateUserInput = {
  date_of_birth?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  status: LeadershipStatus;
};

export enum DiscipleshipJourney {
  Engage = 'ENGAGE'
}

export type Domain = {
  __typename?: 'Domain';
  address: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
};

export type GqlLifeGroupMember = {
  __typename?: 'GqlLifeGroupMember';
  role: LifeGroupRole;
  user: User;
};

export type GqlUserLifeGroupRole = {
  __typename?: 'GqlUserLifeGroupRole';
  lifeGroup: LifeGroup;
  role: LifeGroupRole;
};

export type Jwt = {
  __typename?: 'JWT';
  access_token: Scalars['String'];
};

export enum LeadershipStatus {
  CampusMissionary = 'CAMPUS_MISSIONARY',
  Intern = 'INTERN',
  Leader = 'LEADER',
  Member = 'MEMBER',
  PotentialMember = 'POTENTIAL_MEMBER'
}

export type LifeGroup = {
  __typename?: 'LifeGroup';
  domain?: Maybe<Domain>;
  id: Scalars['Int'];
  members: Array<GqlLifeGroupMember>;
  title: Scalars['String'];
};

export enum LifeGroupRole {
  Leader = 'LEADER',
  Member = 'MEMBER'
}

export type Mutation = {
  __typename?: 'Mutation';
  activateUser: User;
  addLifeGroupMember: LifeGroup;
  attachDisciple: User;
  createDomain: Domain;
  createLifeGroup: LifeGroup;
  createUser: User;
  login: Jwt;
  updateUser: User;
};


export type MutationActivateUserArgs = {
  input: ActivateUserInput;
};


export type MutationAddLifeGroupMemberArgs = {
  lifeGroupId: Scalars['Int'];
  role: Scalars['String'];
  userId: Scalars['Int'];
};


export type MutationAttachDiscipleArgs = {
  discipleId: Scalars['Int'];
  leaderId: Scalars['Int'];
};


export type MutationCreateDomainArgs = {
  address: Scalars['String'];
  title: Scalars['String'];
};


export type MutationCreateLifeGroupArgs = {
  title: Scalars['String'];
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
  userId: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  getDomains: Array<Domain>;
  getLifeGroups: Array<LifeGroup>;
  getUsers: Array<User>;
};

export type UpdateUserInput = {
  date_of_birth?: InputMaybe<Scalars['String']>;
  discipleshipJourney?: InputMaybe<DiscipleshipJourney>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<LeadershipStatus>;
};

export type User = {
  __typename?: 'User';
  date_of_birth?: Maybe<Scalars['String']>;
  disciples: Array<User>;
  discipleshipJourney: DiscipleshipJourney;
  domain?: Maybe<Domain>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  leaders: Array<User>;
  lifeGroups: Array<GqlUserLifeGroupRole>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type UserFragmentFragment = { __typename?: 'User', id: number, name: string };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: number, name: string }> };

export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  name
}
    `;
export const GetUsersDocument = gql`
    query getUsers {
  users: getUsers {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;