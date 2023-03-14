import { FC } from "react";
import { PhotoIcon } from "@heroicons/react/20/solid";

interface Props {
  title: string;
}

export const Section: FC<Props> = ({ title, children }) => {
  return (
    <div className="space-y-3 mb-3 h-full">
      <div className="flex flex-row justify-between">
        <h1>
          <b>{title}</b>
        </h1>
        <button className="w-[40%] flex justify-end underline text-amber-400 hover:text-amber-600 active:text-amber-200">
          Edit
        </button>
      </div>
      <div className="flex flex-col content-start space-y-3 h-full">
        {children}
      </div>
    </div>
  );
};
