import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type ActivateUserInput = {
  activationToken: Scalars["String"];
  password: Scalars["String"];
  userId: Scalars["Int"];
  username: Scalars["String"];
};

export type CreateEventInput = {
  allDay?: InputMaybe<Scalars["Boolean"]>;
  end?: InputMaybe<Scalars["DateTime"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  start: Scalars["DateTime"];
  title: Scalars["String"];
  url?: InputMaybe<Scalars["String"]>;
};

export type CreateUserInput = {
  address?: InputMaybe<Scalars["String"]>;
  dateOfBirth?: InputMaybe<Scalars["String"]>;
  discipleshipJourney: Array<DiscipleshipJourney>;
  email?: InputMaybe<Scalars["String"]>;
  gender?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  phone?: InputMaybe<Scalars["String"]>;
  status: Array<LeadershipStatus>;
};

export enum DiscipleshipJourney {
  Engage = "ENGAGE",
}

export type Domain = {
  __typename?: "Domain";
  address: Scalars["String"];
  id: Scalars["Int"];
  title: Scalars["String"];
};

export type EventEntity = {
  __typename?: "EventEntity";
  id: Scalars["Int"];
};

export type GetAllUsersPaginatedFilterInput = {
  name?: InputMaybe<Scalars["String"]>;
};

export type GetAllUsersPaginatedInput = {
  filter?: InputMaybe<GetAllUsersPaginatedFilterInput>;
  page: PageInput;
};

export type GqlLifeGroupMember = {
  __typename?: "GqlLifeGroupMember";
  role: LifeGroupRole;
  user: User;
};

export type GqlUserLifeGroupRole = {
  __typename?: "GqlUserLifeGroupRole";
  lifeGroup: LifeGroup;
  role: LifeGroupRole;
};

export type Jwt = {
  __typename?: "JWT";
  access_token: Scalars["String"];
};

export enum LeadershipStatus {
  CampusMissionary = "CAMPUS_MISSIONARY",
  Intern = "INTERN",
  Leader = "LEADER",
  Member = "MEMBER",
  PotentialMember = "POTENTIAL_MEMBER",
}

export type LifeGroup = {
  __typename?: "LifeGroup";
  domain?: Maybe<Domain>;
  id: Scalars["Int"];
  members: Array<GqlLifeGroupMember>;
  title: Scalars["String"];
};

export enum LifeGroupRole {
  Leader = "LEADER",
  Member = "MEMBER",
}

export type Mutation = {
  __typename?: "Mutation";
  activateUser: User;
  addLifeGroupMember: LifeGroup;
  attachDisciple: User;
  createDomain: Domain;
  createEvent: EventEntity;
  createLifeGroup: LifeGroup;
  createUser: User;
  login: Jwt;
  updateUser: User;
};

export type MutationActivateUserArgs = {
  input: ActivateUserInput;
};

export type MutationAddLifeGroupMemberArgs = {
  lifeGroupId: Scalars["Int"];
  role: Scalars["String"];
  userId: Scalars["Int"];
};

export type MutationAttachDiscipleArgs = {
  discipleId: Scalars["Int"];
  leaderId: Scalars["Int"];
};

export type MutationCreateDomainArgs = {
  address: Scalars["String"];
  title: Scalars["String"];
};

export type MutationCreateEventArgs = {
  input: CreateEventInput;
};

export type MutationCreateLifeGroupArgs = {
  title: Scalars["String"];
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationLoginArgs = {
  password: Scalars["String"];
  username: Scalars["String"];
};

export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
  userId: Scalars["Int"];
};

export type Page = {
  __typename?: "Page";
  skip: Scalars["Int"];
  take: Scalars["Int"];
};

export type PageInfo = {
  __typename?: "PageInfo";
  nextPage?: Maybe<Page>;
  prevPage?: Maybe<Page>;
};

export type PageInput = {
  skip: Scalars["Int"];
  take: Scalars["Int"];
};

export type Query = {
  __typename?: "Query";
  getActiveUsers: Array<User>;
  getAllUsersPaginated: UserPaginatedResponse;
  getDomains: Array<Domain>;
  getLifeGroups: Array<LifeGroup>;
  getUser: User;
  getUsers: Array<User>;
};

export type QueryGetAllUsersPaginatedArgs = {
  input: GetAllUsersPaginatedInput;
};

export type QueryGetUserArgs = {
  id: Scalars["Int"];
};

export type UpdateUserInput = {
  address?: InputMaybe<Scalars["String"]>;
  dateOfBirth?: InputMaybe<Scalars["String"]>;
  discipleshipJourney?: InputMaybe<Array<DiscipleshipJourney>>;
  email?: InputMaybe<Scalars["String"]>;
  gender?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Array<LeadershipStatus>>;
};

export type User = {
  __typename?: "User";
  address?: Maybe<Scalars["String"]>;
  dateOfBirth?: Maybe<Scalars["String"]>;
  disciples: Array<User>;
  discipleshipJourney: Array<DiscipleshipJourney>;
  domain?: Maybe<Domain>;
  email?: Maybe<Scalars["String"]>;
  gender?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  isActive: Scalars["Boolean"];
  leaders: Array<User>;
  lifeGroups: Array<GqlUserLifeGroupRole>;
  name: Scalars["String"];
  phone?: Maybe<Scalars["String"]>;
  status: Array<LeadershipStatus>;
  username?: Maybe<Scalars["String"]>;
};

export type UserPaginatedResponse = {
  __typename?: "UserPaginatedResponse";
  nodes: Array<User>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;

export type CreateUserMutation = {
  __typename?: "Mutation";
  createUser: {
    __typename?: "User";
    dateOfBirth?: string | null;
    discipleshipJourney: Array<DiscipleshipJourney>;
    email?: string | null;
    id: number;
    name: string;
    phone?: string | null;
    status: Array<LeadershipStatus>;
    username?: string | null;
    address?: string | null;
    gender?: string | null;
    leaders: Array<{ __typename?: "User"; name: string }>;
    disciples: Array<{ __typename?: "User"; name: string }>;
    lifeGroups: Array<{
      __typename?: "GqlUserLifeGroupRole";
      lifeGroup: { __typename?: "LifeGroup"; title: string };
    }>;
  };
};

export type UserFragmentFragment = {
  __typename?: "User";
  dateOfBirth?: string | null;
  discipleshipJourney: Array<DiscipleshipJourney>;
  email?: string | null;
  id: number;
  name: string;
  phone?: string | null;
  status: Array<LeadershipStatus>;
  username?: string | null;
  address?: string | null;
  gender?: string | null;
  leaders: Array<{ __typename?: "User"; name: string }>;
  disciples: Array<{ __typename?: "User"; name: string }>;
  lifeGroups: Array<{
    __typename?: "GqlUserLifeGroupRole";
    lifeGroup: { __typename?: "LifeGroup"; title: string };
  }>;
};

export type GetUserQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type GetUserQuery = {
  __typename?: "Query";
  result: {
    __typename?: "User";
    dateOfBirth?: string | null;
    discipleshipJourney: Array<DiscipleshipJourney>;
    email?: string | null;
    id: number;
    name: string;
    phone?: string | null;
    status: Array<LeadershipStatus>;
    username?: string | null;
    address?: string | null;
    gender?: string | null;
    leaders: Array<{ __typename?: "User"; name: string }>;
    disciples: Array<{ __typename?: "User"; name: string }>;
    lifeGroups: Array<{
      __typename?: "GqlUserLifeGroupRole";
      lifeGroup: { __typename?: "LifeGroup"; title: string };
    }>;
  };
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  __typename?: "Query";
  result: Array<{
    __typename?: "User";
    dateOfBirth?: string | null;
    discipleshipJourney: Array<DiscipleshipJourney>;
    email?: string | null;
    id: number;
    name: string;
    phone?: string | null;
    status: Array<LeadershipStatus>;
    username?: string | null;
    address?: string | null;
    gender?: string | null;
    leaders: Array<{ __typename?: "User"; name: string }>;
    disciples: Array<{ __typename?: "User"; name: string }>;
    lifeGroups: Array<{
      __typename?: "GqlUserLifeGroupRole";
      lifeGroup: { __typename?: "LifeGroup"; title: string };
    }>;
  }>;
};

export type GetUsersPaginatedQueryVariables = Exact<{
  input: GetAllUsersPaginatedInput;
}>;

export type GetUsersPaginatedQuery = {
  __typename?: "Query";
  result: {
    __typename?: "UserPaginatedResponse";
    totalCount: number;
    nodes: Array<{
      __typename?: "User";
      dateOfBirth?: string | null;
      discipleshipJourney: Array<DiscipleshipJourney>;
      email?: string | null;
      id: number;
      name: string;
      phone?: string | null;
      status: Array<LeadershipStatus>;
      username?: string | null;
      address?: string | null;
      gender?: string | null;
    }>;
    pageInfo: {
      __typename?: "PageInfo";
      nextPage?: { __typename?: "Page"; skip: number; take: number } | null;
      prevPage?: { __typename?: "Page"; skip: number; take: number } | null;
    };
  };
};

export type UpdateUserMutationVariables = Exact<{
  userId: Scalars["Int"];
  input: UpdateUserInput;
}>;

export type UpdateUserMutation = {
  __typename?: "Mutation";
  updateUser: {
    __typename?: "User";
    dateOfBirth?: string | null;
    discipleshipJourney: Array<DiscipleshipJourney>;
    email?: string | null;
    id: number;
    name: string;
    phone?: string | null;
    status: Array<LeadershipStatus>;
    username?: string | null;
    address?: string | null;
    gender?: string | null;
    leaders: Array<{ __typename?: "User"; name: string }>;
    disciples: Array<{ __typename?: "User"; name: string }>;
    lifeGroups: Array<{
      __typename?: "GqlUserLifeGroupRole";
      lifeGroup: { __typename?: "LifeGroup"; title: string };
    }>;
  };
};

export const UserFragmentFragmentDoc = gql`
  fragment UserFragment on User {
    dateOfBirth
    discipleshipJourney
    email
    id
    name
    phone
    status
    username
    isActive
    address
    gender
    isActive
    leaders {
      name
    }
    disciples {
      name
    }
    lifeGroups {
      lifeGroup {
        title
      }
    }
  }
`;
export const CreateUserDocument = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      ...UserFragment
    }
  }
  ${UserFragmentFragmentDoc}
`;
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    options
  );
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>;
export type CreateUserMutationResult =
  Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;
export const GetUserDocument = gql`
  query getUser($id: Int!) {
    result: getUser(id: $id) {
      ...UserFragment
    }
  }
  ${UserFragmentFragmentDoc}
`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(
  baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options
  );
}
export function useGetUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options
  );
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<
  GetUserQuery,
  GetUserQueryVariables
>;
export const GetUsersDocument = gql`
  query getUsers {
    result: getUsers {
      ...UserFragment
    }
  }
  ${UserFragmentFragmentDoc}
`;

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
export function useGetUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options
  );
}
export function useGetUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUsersQuery,
    GetUsersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options
  );
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<
  typeof useGetUsersLazyQuery
>;
export type GetUsersQueryResult = Apollo.QueryResult<
  GetUsersQuery,
  GetUsersQueryVariables
>;
export const GetUsersPaginatedDocument = gql`
  query getUsersPaginated($input: GetAllUsersPaginatedInput!) {
    result: getAllUsersPaginated(input: $input) {
      nodes {
        dateOfBirth
        discipleshipJourney
        email
        id
        name
        phone
        status
        isActive
        username
        address
        gender
        isActive
      }
      pageInfo {
        nextPage {
          skip
          take
        }
        prevPage {
          skip
          take
        }
      }
      totalCount
    }
  }
`;

/**
 * __useGetUsersPaginatedQuery__
 *
 * To run a query within a React component, call `useGetUsersPaginatedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersPaginatedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersPaginatedQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetUsersPaginatedQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUsersPaginatedQuery,
    GetUsersPaginatedQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetUsersPaginatedQuery,
    GetUsersPaginatedQueryVariables
  >(GetUsersPaginatedDocument, options);
}
export function useGetUsersPaginatedLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUsersPaginatedQuery,
    GetUsersPaginatedQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetUsersPaginatedQuery,
    GetUsersPaginatedQueryVariables
  >(GetUsersPaginatedDocument, options);
}
export type GetUsersPaginatedQueryHookResult = ReturnType<
  typeof useGetUsersPaginatedQuery
>;
export type GetUsersPaginatedLazyQueryHookResult = ReturnType<
  typeof useGetUsersPaginatedLazyQuery
>;
export type GetUsersPaginatedQueryResult = Apollo.QueryResult<
  GetUsersPaginatedQuery,
  GetUsersPaginatedQueryVariables
>;
export const UpdateUserDocument = gql`
  mutation UpdateUser($userId: Int!, $input: UpdateUserInput!) {
    updateUser(userId: $userId, input: $input) {
      ...UserFragment
    }
  }
  ${UserFragmentFragmentDoc}
`;
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    options
  );
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>;
export type UpdateUserMutationResult =
  Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
