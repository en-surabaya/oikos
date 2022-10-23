import { createHookWithContext } from "../../hooks/createContextWithHooks";
import { PaginatedQuery } from "./interface";

export const [usePagination, PaginationContext] =
  createHookWithContext<PaginatedQuery<any, any, any>>("PaginatedQuery");
