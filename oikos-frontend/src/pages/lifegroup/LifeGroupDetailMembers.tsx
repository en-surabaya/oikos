import { PlusIcon } from "@heroicons/react/20/solid";
import { FC, useState } from "react";
import { OffsetPaginationProvider } from "../../components/Pagination/OffsetPaginationProvider";
import { UserAddModal } from "../../modules/Users/components/UserAddModal";
import { UserTable } from "../../modules/Users/components/UserTable";
import { useGetUsersPaginated } from "../../modules/Users/query/getUsersPaginated";

export const LifeGroupDetailMembers: FC = () => {
  const [showAdd, setShowAdd] = useState(false);

  return (
    <div className="w-full h-full">
      <div className="flex flex-col w-full h-full p-16 pt-24 space-y-12">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-3xl font-bold">Life Group</h1>
          <button
            className="flex items-center underline"
            onClick={() => setShowAdd(true)}
          >
            <PlusIcon width={20} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
