import { usePaginatedQuery } from "../../../components/Pagination/usePaginatedQuery";
import {
  GetAllUsersPaginatedFilterInput,
  PageInput,
  User,
} from "../../../generated/graphql";
import { loader } from "graphql.macro";

const query = loader("./getUsersPaginated.graphql");
export function useGetUsersPaginated(
  initialFilter: GetAllUsersPaginatedFilterInput,
  initialPage: PageInput
) {
  return usePaginatedQuery<User, GetAllUsersPaginatedFilterInput, PageInput>(
    query,
    { filter: initialFilter, page: initialPage }
  );
}
