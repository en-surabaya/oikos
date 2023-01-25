import { FC, MouseEventHandler } from "react";

const TableBodyRow: FC<{
  onClick?: MouseEventHandler<HTMLTableRowElement>;
}> = ({ children, onClick }) => {
  return (
    <tr
      onClick={onClick}
      className={`${
        onClick ? "hover:cursor-pointer" : ""
      } bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600`}
    >
      {children}
    </tr>
  );
};

const TableBodyCell: FC = ({ children }) => {
  return <td className="py-4 px-6 text-black">{children}</td>;
};

const TableBodyRoot: FC = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export const TableBody = Object.assign(TableBodyRoot, {
  Row: Object.assign(TableBodyRow, {
    Cell: TableBodyCell,
  }),
});
