import { FC } from "react";
import { PhotoIcon } from "@heroicons/react/20/solid";

interface Props {
  firstName?: string;
  imagePath?: string;
}

export const Avatar: FC<Props> = ({ firstName, imagePath }) => {
  let content;
  if (imagePath) {
    content = <img src={imagePath} />;
  } else if (firstName) {
    content = (
      <h1 className="text-2xl">
        <b>{firstName[0]}</b>
      </h1>
    );
  } else {
    content = <PhotoIcon width={40} />;
  }
  return (
    <div className="flex justify-center items-center w-[104px] h-[104px] bg-slate-0 rounded-2xl border border-dark">
      {content}
    </div>
  );
};
