import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PillGroup } from "../../../components/PillGroup/PillGroup";
import { List } from "../../../components/List";
import { UserFragmentFragment } from "../../../generated/graphql";

interface Props {
  item: UserFragmentFragment;
}

export const UpcomingEventListItem: FC<Props> = ({ item }) => {
  const navigate = useNavigate();
  const onRowClick = () => {
    navigate(`/event/${item.id}`); // path doesn't exist yet
  };
  return (
    <List.Body.Row onClick={onRowClick}>
      <List.Body.Row.Cell>{item.name}</List.Body.Row.Cell>
      {/* <List.Body.Row.Cell>{item.date}</List.Body.Row.Cell> */}
      <List.Body.Row.Cell>Leader</List.Body.Row.Cell>
    </List.Body.Row>
  );
};
