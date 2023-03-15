import { FC } from "react";
import { List } from "../../../components/List";
import { UpcomingEventListItem } from "./UpcomingEventListItem";

export const UpcomingEventList: FC = () => {
  // Hard-coding items for now. Later populate with UpcomingEventFragment
  const items = [
    {
      id: "0",
      name: "Event 1",
      date: "1 Jan 2023",
    },
    {
      id: "1",
      name: "Event 2",
      date: "1 Feb 2023",
    },
  ];
  return (
    <List>
      <List.Body>
        {items?.map((item) => (
          <UpcomingEventListItem
            key={`upcoming-event-list-item-${item.id}`}
            item={item}
          />
        ))}
      </List.Body>
    </List>
  );
};
