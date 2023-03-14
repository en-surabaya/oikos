import { FC } from "react";
import { PaginatedTable } from "../../../components/PaginatedTable/PaginatedTable";
import { usePagination } from "../../../components/Pagination/PaginationProvider";
import { Table } from "../../../components/Table";
import { LifeGroupTableHeader } from "./LifeGroupTableHeader";
import { LifeGroupTableItem } from "./LifeGroupTableItem";

export const LifeGroupTable: FC = () => {
  const query = usePagination();
  const items = query.data;
  return (
    <PaginatedTable>
      <Table.Body>
        {items?.map((item) => (
          <LifeGroupTableItem key={`user-table-item-${item.id}`} item={item} />
        ))}
      </Table.Body>
    </PaginatedTable>
  );
};
