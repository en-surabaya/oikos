import { FC } from "react";
import { usePagination } from "../Pagination/PaginationProvider";
import { Table } from "../Table";
import { PaginatedPages } from "./PaginatedPages";

export const PaginatedTable: FC = ({ children }) => {
  const query = usePagination();
  return (
    <>
      <div className="flex flex-col space-y-2 overflow-auto">
        <Table>
          {children}
          {query.loading && "loading"}
        </Table>
        <PaginatedPages />
      </div>
    </>
  );
};
