import { FC } from "react";
import { Table } from "../../../components/Table";

export const UserTableHeader: FC = () => {
  return (
    <Table.Header.Row>
      <Table.Header.Row.Cell>Name</Table.Header.Row.Cell>
      <Table.Header.Row.Cell>Role</Table.Header.Row.Cell>
      <Table.Header.Row.Cell>Progress</Table.Header.Row.Cell>
      <Table.Header.Row.Cell>Joined</Table.Header.Row.Cell>
    </Table.Header.Row>
  );
};
