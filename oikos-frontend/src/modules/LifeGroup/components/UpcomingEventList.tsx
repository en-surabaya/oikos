import { FC } from "react";
import { PaginatedList } from "../../../components/PaginatedTable/PaginatedList";
import { usePagination } from "../../../components/Pagination/PaginationProvider";
import { List } from "../../../components/List";
import { UpcomingEventListItem } from "./UpcomingEventListItem";

export const UpcomingEventList: FC = () => {
  const query = usePagination();
  const items = query.data;
  return (
    <PaginatedList>
      <List.Body>
        {items?.map((item) => (
          <UpcomingEventListItem
            key={`upcoming-event-list-item-${item.id}`}
            item={item}
          />
        ))}
      </List.Body>
    </PaginatedList>
  );
};
