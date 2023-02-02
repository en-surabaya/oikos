import { FC } from "react";
import { PhotoIcon } from "@heroicons/react/20/solid";

interface Props {
  title: string;
}

export const Clipboard: FC<Props> = ({ title, children }) => {
  return (
    <div className="space-y-3 mb-3">
      <div className="flex flex-row justify-between">
        <h1>
          <b>{title}</b>
        </h1>
        <button className="w-[40%]flex justify-end underline text-amber-400 hover:text-amber-600 active:text-amber-200">
          Edit
        </button>
      </div>
      <div className="flex flex-col bg-slate-50 rounded-xl content-start drop-shadow-md py-4 space-y-3">
        {children}
      </div>
    </div>
  );
};
