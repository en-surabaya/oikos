import { FC } from "react";
import { Table } from "../../../components/Table";

export const LifeGroupTableHeader: FC = () => {
  return (
    <Table.Header.Row>
      <Table.Header.Row.Cell>Name</Table.Header.Row.Cell>
      <Table.Header.Row.Cell>Leaders</Table.Header.Row.Cell>
      <Table.Header.Row.Cell>Last Event</Table.Header.Row.Cell>
      <Table.Header.Row.Cell>Location</Table.Header.Row.Cell>
    </Table.Header.Row>
  );
};
