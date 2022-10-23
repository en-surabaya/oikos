import { useQuery } from "@apollo/client";
import { DocumentNode } from "graphql";
import { useEffect, useRef, useState } from "react";
import {
  PaginatedQuery,
  PaginatedQueryResult,
  PaginatedQueryVariables,
  PaginatedVariables,
} from "./interface";

export function usePaginatedQuery<Type, Filter, Page>(
  document: DocumentNode,
  initialVariables: PaginatedVariables<Filter, Page>
): PaginatedQuery<Type, Filter, Page> {
  const [variables, setVariables] =
    useState<PaginatedVariables<Filter, Page>>(initialVariables);

  const updateVariables = (
    partialVariables: Partial<PaginatedVariables<Filter, Page>>
  ) => {
    setVariables((variables) => ({ ...variables, ...partialVariables }));
  };

  const { data, loading, refetch, fetchMore, error } = useQuery<
    PaginatedQueryResult<Type>,
    PaginatedQueryVariables<Filter, Page>
  >(document, {
    variables: { input: { ...variables } },
  });

  useEffect(() => {
    refetch();
  }, [variables]);

  const totalCountRef = useRef(data?.result.totalCount ?? 0);
  totalCountRef.current = data?.result.totalCount ?? totalCountRef.current;
  const totalCount = totalCountRef.current;

  const nodes = data?.result.nodes || [];
  const nextCursor = data?.result.pageInfo.nextCursor;

  const loadMore = async () => {
    if (!nextCursor) {
      return;
    }
    await fetchMore({
      variables: { input: { filter: variables.filter } },
      updateQuery(previousResult, { fetchMoreResult }) {
        if (!fetchMoreResult) {
          return previousResult;
        }
        return {
          result: {
            nodes: [
              ...previousResult.result.nodes,
              ...fetchMoreResult.result.nodes,
            ],
            totalCount: fetchMoreResult.result.totalCount,
            pageInfo: {
              prevCursor: previousResult.result.pageInfo.prevCursor,
              nextCursor: fetchMoreResult.result.pageInfo.nextCursor,
            },
          },
        };
      },
    });
  };

  return {
    data: nodes,
    error,
    variables,
    updateVariables,
    totalCount,
    loading,
    refetch,
    loadMore,
    hasNext: Boolean(nextCursor),
  };
}
