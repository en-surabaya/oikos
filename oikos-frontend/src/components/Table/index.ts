import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";
import { TableRoot } from "./TableRoot";

export const Table = Object.assign(TableRoot, {
  Header: TableHeader,
  Body: TableBody,
});
