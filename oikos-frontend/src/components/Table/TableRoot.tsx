import { FC } from "react";

export const TableRoot: FC = ({ children }) => {
  return (
    <div className="overflow-x-auto relative sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        {children}
      </table>
    </div>
  );
};
