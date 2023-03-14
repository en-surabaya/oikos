import { FC } from "react";
import { usePagination } from "../Pagination/PaginationProvider";
import { List } from "../List";
import { PaginatedPages } from "./PaginatedPages";

export const PaginatedList: FC = ({ children }) => {
  const query = usePagination();
  return (
    <>
      <div className="flex flex-col space-y-2 overflow-auto">
        <List>
          {children}
          {query.loading && "loading"}
        </List>
        <PaginatedPages />
      </div>
    </>
  );
};
