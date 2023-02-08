import { PlusIcon } from "@heroicons/react/20/solid";
import { FC, useState } from "react";
import { OffsetPaginationProvider } from "../../components/Pagination/OffsetPaginationProvider";
import { UserAddModal } from "../../modules/Users/components/UserAddModal";
import { UserTable } from "../../modules/Users/components/UserTable";
import { useGetUsersPaginated } from "../../modules/Users/query/getUsersPaginated";

export const PeoplePage: FC = () => {
  const [showAdd, setShowAdd] = useState(false);

  return (
    <div className="w-full h-full">
      <div className="flex flex-col w-full h-full p-16 pt-24 space-y-12">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-3xl font-bold">People</h1>
          <button
            className="flex items-center underline"
            onClick={() => setShowAdd(true)}
          >
            <PlusIcon width={20} />
            Add
          </button>
        </div>
        <OffsetPaginationProvider
          initialFilter={{}}
          initialPage={{ skip: 0, take: 10 }}
          paginationHook={useGetUsersPaginated}
        >
          {(query) => {
            if (query.data.length > 0) {
              return (
                <>
                  <UserTable />
                  <UserAddModal showAdd={showAdd} setShowAdd={setShowAdd} />
                </>
              );
            }

            if (query.data.length === 0) {
              return (
                <>
                  <div className="flex justify-center text-gray-500">
                    No Users Found
                  </div>
                  <UserAddModal showAdd={showAdd} setShowAdd={setShowAdd} />
                </>
              );
            }
          }}
        </OffsetPaginationProvider>
      </div>
    </div>
  );
};
