import { FC } from "react";
import { PillGroup } from "../../../components/PillGroup/PillGroup";
import { Table } from "../../../components/Table";
import { UserFragmentFragment } from "../../../generated/graphql";

interface Props {
  item: UserFragmentFragment;
}

export const UserTableItem: FC<Props> = ({ item }) => {
  return (
    <Table.Body.Row>
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
