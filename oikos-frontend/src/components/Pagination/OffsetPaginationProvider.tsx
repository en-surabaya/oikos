import { ReactNode, useEffect } from "react";
import { PaginatedQuery } from "./interface";
import { isFunction } from "lodash";
import { PaginationContext } from "./PaginationProvider";

export type PaginationHook<Type, Filter, Page> = (
  initialFilter: Filter,
  initialPage: Page
) => PaginatedQuery<Type, Filter, Page>;

interface Props<Type, Filter, Page> {
  initialFilter: Filter;
  initialPage: Page;
  paginationHook: PaginationHook<Type, Filter, Page>;
  children:
    | ReactNode
    | ((query: PaginatedQuery<Type, Filter, Page>) => ReactNode);
}

export function OffsetPaginationProvider<Type, Filter, Page>({
  initialFilter,
  initialPage,
  paginationHook: usePaginatedQuery,
  children,
}: Props<Type, Filter, Page>) {
  const query = usePaginatedQuery(initialFilter, initialPage);
  children = isFunction(children) ? children(query) : children;

  useEffect(() => {
    query.updateVariables({ filter: initialFilter });
  }, [initialFilter]);

  return (
    <PaginationContext.Provider value={query}>
      {children}
    </PaginationContext.Provider>
  );
}
