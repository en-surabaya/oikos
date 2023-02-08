import { FC } from "react";

const TableHeaderRoot: FC = ({ children }) => {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-dark-lighter">
      {children}
    </thead>
  );
};

const TableHeaderRow: FC = ({ children }) => {
  return <tr>{children}</tr>;
};

const TableHeaderCell: FC = ({ children }) => {
  return (
    <th scope="col" className="py-3 px-6">
      {children}
    </th>
  );
};

export const TableHeader = Object.assign(TableHeaderRoot, {
  Row: Object.assign(TableHeaderRow, {
    Cell: TableHeaderCell,
  }),
});
