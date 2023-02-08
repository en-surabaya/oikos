import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PillGroup } from "../../../components/PillGroup/PillGroup";
import { Table } from "../../../components/Table";
import { UserFragmentFragment } from "../../../generated/graphql";

interface Props {
  item: UserFragmentFragment;
}

export const UserTableItem: FC<Props> = ({ item }) => {
  const navigate = useNavigate();
  const onRowClick = () => {
    navigate(`/people/${item.id}`);
  };
  return (
    <Table.Body.Row onClick={onRowClick}>
      <Table.Body.Row.Cell>{item.name}</Table.Body.Row.Cell>
      <Table.Body.Row.Cell>
        <PillGroup items={item.status} maxItem={2} />
      </Table.Body.Row.Cell>
      <Table.Body.Row.Cell>
        <PillGroup items={item.discipleshipJourney} maxItem={2} />
      </Table.Body.Row.Cell>
      <Table.Body.Row.Cell>Date Placeholder</Table.Body.Row.Cell>
    </Table.Body.Row>
  );
};
