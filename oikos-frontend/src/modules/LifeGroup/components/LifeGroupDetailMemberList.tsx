import { FC } from "react";
import { List } from "../../../components/List";
import { LifeGroupMemberListItem } from "./LifeGroupDetailMemberListItem";

export const LifeGroupMemberDetailList: FC = () => {
  // Hard-coding items for now. Later populate with UpcomingEventFragment
  const items = [
    {
      id: "0",
      name: "User 1",
      role: "Leader",
    },
    {
      id: "1",
      name: "User 2",
      role: "",
    },
  ];
  return (
    <List>
      <List.Body>
        {items?.map((item) => (
          <LifeGroupMemberListItem
            key={`upcoming-event-list-item-${item.id}`}
            item={item}
          />
        ))}
      </List.Body>
    </List>
  );
};
