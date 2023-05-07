import { FC } from "react";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import {
  Cog6ToothIcon,
  HomeIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export const Sidebar: FC = () => {
  return (
    <div className="w-[20%] min-h-screen bg-dark flex flex-col p-8 space-y-8">
      <div className="flex justify-end text-white">
        <ChevronLeftIcon width={30} />
      </div>
      <div className="flex items-center justify-start text-white gap-x-4 hover:bg-gray-700 active:bg-dark transition rounded-sm p-2">
        <HomeIcon width={30} />
        Dashboard
      </div>
      <Link to={"/people"}>
        <div className="flex items-center justify-start text-white gap-x-4 hover:bg-gray-700 active:bg-dark transition rounded-sm p-2">
          <UserIcon width={30} />
          People
        </div>
      </Link>
      <div className="flex items-center justify-start text-white gap-x-4 hover:bg-gray-700 active:bg-dark transition rounded-sm p-2">
        <UserGroupIcon width={30} />
        Lifegroup
      </div>
      <div className="flex items-center justify-start text-white gap-x-4 hover:bg-gray-700 active:bg-dark transition rounded-sm p-2">
        <Cog6ToothIcon width={30} />
        Settings
      </div>
    </div>
  );
};
