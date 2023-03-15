import { FC } from "react";

export const ListRoot: FC = ({ children }) => {
  return (
    <div className="overflow-x-auto relative sm:rounded-lg">
      <table className="w-full text-left">{children}</table>
    </div>
  );
};
