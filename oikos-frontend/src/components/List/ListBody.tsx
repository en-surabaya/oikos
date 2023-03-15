import { FC, MouseEventHandler } from "react";

const ListBodyRow: FC<{
  onClick?: MouseEventHandler<HTMLTableRowElement>;
}> = ({ children, onClick }) => {
  return (
    <tr
      onClick={onClick}
      className={`${
        onClick ? "hover:cursor-pointer" : ""
      } hover:text-amber-500`}
    >
      {children}
    </tr>
  );
};

const ListBodyCell: FC = ({ children }) => {
  return <td className="py-2 px-2">{children}</td>;
};

const ListBodyRoot: FC = ({ children }) => {
  return <tbody className="rounded-lg">{children}</tbody>;
};

export const ListBody = Object.assign(ListBodyRoot, {
  Row: Object.assign(ListBodyRow, {
    Cell: ListBodyCell,
  }),
});
