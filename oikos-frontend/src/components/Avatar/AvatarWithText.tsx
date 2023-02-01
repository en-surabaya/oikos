import { FC } from "react";
import { PhotoIcon } from "@heroicons/react/20/solid";
import { Avatar } from "./Avatar";
import { PillGroup } from "../PillGroup/PillGroup";

interface Props {
  name: string;
  imagePath?: string;
  tags?: string[];
}

export const AvatarWithText: FC<Props> = ({ name, imagePath, tags }) => {
  return (
    <div className="flex justify-start space-x-8 items-center w-full">
      <Avatar firstName={name} imagePath={imagePath} />
      <div className="flex flex-col space-y-3">
        <h1 className="text-2xl">
          <b>{name}</b>
        </h1>
        {tags && <PillGroup items={tags} maxItem={3} />}
      </div>
    </div>
  );
};
