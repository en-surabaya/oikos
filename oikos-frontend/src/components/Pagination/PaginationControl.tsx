import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import React, { FC } from "react";

export type Props = {
  /**
   * Total page count
   */
  count: number;
  /**
   * Page currently shown/selected (starts from 1)
   */
  page: number;
  onChange?: (page: number) => void;
  /**
   * Total item count
   */
  totalItems: number;
  /**
   * Items shown per page
   */
  itemsPerPage?: number;
  /**
   * Show text field to go to a specific page
   */
  enableItemsPerPage?: boolean;
  /**
   * Options for `itemsPerPage` value
   */
  itemsPerPageOptions?: number[];
  /**
   * Function to run after changing `itemsPerPage`
   */
  onItemsPerPageChange?: (event: React.ChangeEvent) => void;
};

const range = (start: number, end: number) => {
  let length = end - start + 1;
  /*
  	Create an array of certain length and set the elements within it from
    start value to end value.
  */
  return Array.from({ length }, (_, idx) => idx + start);
};

export const PaginationControl: FC<Props> = ({
  count,
  page,
  itemsPerPage,
  totalItems,
  onChange,
}) => {
  let pageNumbers;
  itemsPerPage = itemsPerPage || 10;
  const siblingCount = 1;

  const firstPageIndex = 1;
  const lastPageIndex = count;

  // Case 1: Show all page numbers
  if (count <= 5) {
    pageNumbers = range(1, count);
  }

  // Case 2: First 3
  else if (page <= 3) {
    pageNumbers = [...range(1, 4), 0, lastPageIndex];
  }

  // Case 3: Last 3
  else if (page > count - 3) {
    pageNumbers = [firstPageIndex, 0, ...range(count - 3, count)];
  }

  // Case 4: Middle
  else {
    pageNumbers = [
      firstPageIndex,
      0,
      ...range(page - siblingCount, page + siblingCount),
      0,
      count,
    ];
  }

  let keyCount = 0;

  const takeStart = (page - 1) * itemsPerPage + 1;
  const takeEnd = (page - 1) * itemsPerPage + 10;

  const handleChange = (toPage: number) => {
    if (onChange) {
      onChange(toPage);
    }
  };

  const handleNext = () => {
    if (page < count && onChange) {
      onChange(page + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1 && onChange) {
      onChange(page - 1);
    }
  };

  return (
    <div className="flex items-center justify-between w-full px-4 py-3 bg-transparent border-t border-gray-200 sm:px-6">
      <div className="flex justify-between flex-1 sm:hidden">
        <div className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
          Previous = range(1, count);
        </div>
        <div className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
          Next
        </div>
      </div>
      <div className="hidden w-full sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="flex text-sm text-gray-700 gap-x-1">
            Showing
            <span className="fon97t-medium">{takeStart}</span>
            to
            <span className="font-medium">
              {totalItems < takeEnd ? totalItems : takeEnd}
            </span>
            of
            <span className="font-medium">{totalItems}</span>
            results
          </p>
        </div>
        <div>
          <nav
            className="inline-flex -space-x-px bg-white rounded-md shadow-sm select-none isolate"
            aria-label="Pagination"
          >
            <div
              onClick={() => handlePrev()}
              className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-pointer rounded-l-md hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon width={16} />
            </div>
            {pageNumbers.map((num) => {
              if (num === 0) {
                return (
                  <div
                    key={`PaginationControl-${num}-${keyCount++}`}
                    className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 focus:z-20"
                  >
                    ...
                  </div>
                );
              }

              if (num === page) {
                return (
                  <div
                    key={`PaginationControl-${num}-${keyCount++}`}
                    aria-current="page"
                    className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 border border-blue-200 cursor-pointer bg-blue-50 focus:z-20"
                  >
                    {num}
                  </div>
                );
              }

              return (
                <div
                  key={`PaginationControl-${num}-${keyCount++}`}
                  className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-pointer hover:bg-gray-50 focus:z-20"
                  onClick={() => handleChange(num)}
                >
                  {num}
                </div>
              );
            })}
            <div
              onClick={() => handleNext()}
              className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-pointer rounded-r-md hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon width={16} />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
