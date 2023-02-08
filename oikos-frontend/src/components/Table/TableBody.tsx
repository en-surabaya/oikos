import { FC, MouseEventHandler } from "react";

const TableBodyRow: FC<{
  onClick?: MouseEventHandler<HTMLTableRowElement>;
}> = ({ children, onClick }) => {
  return (
    <tr
      onClick={onClick}
      className={`${
        onClick ? "hover:cursor-pointer" : ""
      } bg-white border-b hover:bg-gray-100`}
    >
      {children}
    </tr>
  );
};

const TableBodyCell: FC = ({ children }) => {
  return <td className="py-4 px-6 text-black">{children}</td>;
};

const TableBodyRoot: FC = ({ children }) => {
  return <tbody className="rounded-lg">{children}</tbody>;
};

export const TableBody = Object.assign(TableBodyRoot, {
  Row: Object.assign(TableBodyRow, {
    Cell: TableBodyCell,
  }),
});
