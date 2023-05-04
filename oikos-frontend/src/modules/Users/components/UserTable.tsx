import { FC } from "react";
import { PaginatedTable } from "../../../components/PaginatedTable/PaginatedTable";
import { usePagination } from "../../../components/Pagination/PaginationProvider";
import { Table } from "../../../components/Table";
import { UserTableHeader } from "./UserTableHeader";
import { UserTableItem } from "./UserTableItem";

export const UserTable: FC = () => {
  const query = usePagination();
  const items = query.data;
  return (
    <PaginatedTable>
      <Table.Header>
        <UserTableHeader />
      </Table.Header>
      <Table.Body>
        {items?.map((item) => (
          <UserTableItem key={`user-table-item-${item.id}`} item={item} />
        ))}
      </Table.Body>
    </PaginatedTable>
  );
};
