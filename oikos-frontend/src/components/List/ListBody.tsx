import { FC, MouseEventHandler } from "react";

const ListBodyRow: FC<{
  onClick?: MouseEventHandler<HTMLTableRowElement>;
}> = ({ children, onClick }) => {
  return (
    <tr
      onClick={onClick}
      className={`${
        onClick ? "hover:cursor-pointer" : ""
      } border-b hover:bg-amber-500/50`}
    >
      {children}
    </tr>
  );
};

const ListBodyCell: FC = ({ children }) => {
  return <td className="py-2 px-2 text-black">{children}</td>;
};

const ListBodyRoot: FC = ({ children }) => {
  return <tbody className="rounded-lg">{children}</tbody>;
};

export const ListBody = Object.assign(ListBodyRoot, {
  Row: Object.assign(ListBodyRow, {
    Cell: ListBodyCell,
  }),
});
