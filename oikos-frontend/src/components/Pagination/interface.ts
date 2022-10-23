import { ApolloError, ApolloQueryResult } from "@apollo/client";

export declare enum OrderType {
  ASC = "ASC",
  DESC = "DESC",
}
export interface Sort {
  field: string;
  order: OrderType;
}
export interface SortFilterData<Filter = {}> {
  filter: Filter;
  sort: Sort[];
}

export interface PaginatedVariables<Filter, Page> {
  filter: Filter;
  page: Page;
}

export interface PaginatedQueryVariables<Filter, Page> {
  input: {
    filter?: Filter | null;
    page?: Page | null;
    sort?: Sort[] | null;
  };
}
export interface PaginatedQueryResult<T> {
  result: PaginatedResponse<T>;
}
export interface PaginatedResponse<T> {
  totalCount: number;
  nodes: T[];
  pageInfo: {
    prevCursor?: string | null;
    nextCursor?: string | null;
  };
}

export interface PaginatedQuery<Type, Filter, Page> {
  data: Type[];
  error: ApolloError | undefined;
  variables: PaginatedVariables<Filter, Page>;
  updateVariables: (
    variables: Partial<PaginatedVariables<Filter, Page>>
  ) => void;
  totalCount: number;
  loading: boolean;
  refetch: (
    variables?: Partial<PaginatedQueryVariables<Filter, Page>>
  ) => Promise<ApolloQueryResult<PaginatedQueryResult<Type>>>;
  loadMore: () => Promise<void>;
  hasNext: boolean;
}
