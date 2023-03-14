import { FC } from "react";

export const ListRoot: FC = ({ children }) => {
  return (
    <div className="overflow-x-auto relative sm:rounded-lg">
      <table className="w-full text-left text-gray-500">{children}</table>
    </div>
  );
};
