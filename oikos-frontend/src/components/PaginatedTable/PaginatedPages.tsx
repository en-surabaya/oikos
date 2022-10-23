import { FC } from "react";
import { PageInput } from "../../generated/graphql";
import { PaginatedQuery } from "../Pagination/interface";
import { PaginationControl } from "../Pagination/PaginationControl";
import { usePagination } from "../Pagination/PaginationProvider";

export const PaginatedPages: FC = () => {
  const { variables, updateVariables, totalCount } =
    usePagination() as PaginatedQuery<unknown, unknown, PageInput>;

  const page = variables.page;
  const pageCount = Math.ceil(totalCount / page.take);
  const pageNumber = Math.ceil(page.skip / page.take) + 1;

  const getOffsetPage = (page: number, loadSize: number) => {
    return { take: loadSize, skip: (page - 1) * loadSize };
  };

  const handlePageChange = (pageNumber: number) => {
    const offsetPage = getOffsetPage(pageNumber, page.take);
    updateVariables({ page: offsetPage });
  };

  // const handleItemPerPageChange = (event: SelectChangeEvent<unknown>) => {
  //   updateVariables({
  //     page: { take: event.target.value as number, skip: page.skip },
  //   });
  // };

  return (
    <div className="flex items-center justify-between">
      <PaginationControl
        count={pageCount}
        totalItems={totalCount}
        onChange={handlePageChange}
        page={pageNumber}
        // itemsPerPage={page.take}
        // onItemsPerPageChange={handleItemPerPageChange}
      />
    </div>
  );
};
