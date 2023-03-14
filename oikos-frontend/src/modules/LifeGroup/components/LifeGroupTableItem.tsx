import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PillGroup } from "../../../components/PillGroup/PillGroup";
import { Table } from "../../../components/Table";
import { UserFragmentFragment } from "../../../generated/graphql";

interface Props {
  item: UserFragmentFragment;
}

export const LifeGroupTableItem: FC<Props> = ({ item }) => {
  const navigate = useNavigate();
  const onRowClick = () => {
    navigate(`/lifegroup/${item.id}`);
  };
  return (
    <Table.Body.Row onClick={onRowClick}>
      <Table.Body.Row.Cell>{item.name}</Table.Body.Row.Cell>
      <Table.Body.Row.Cell>
        {/* <PillGroup items={item.leaders} maxItem={2} /> */}
      </Table.Body.Row.Cell>
      <Table.Body.Row.Cell>Last Event Placeholder</Table.Body.Row.Cell>
      {/* <Table.Body.Row.Cell>{item.location}</Table.Body.Row.Cell> */}
      <Table.Body.Row.Cell>Location Placeholder</Table.Body.Row.Cell>
    </Table.Body.Row>
  );
};
