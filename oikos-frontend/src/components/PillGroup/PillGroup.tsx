import { FC } from "react";
import { Pill } from "./Pill";

interface Props {
  items: string[];
  maxItem?: number;
}

export const PillGroup: FC<Props> = ({ items, maxItem }) => {
  const toBePrinted = maxItem ? items.slice(0, maxItem) : items;
  const ellipsis = maxItem ? items.length > maxItem : false;
  return (
    <div className="flex space-x-1">
      {toBePrinted.map((item) => (
        <Pill key={`pill-${item}`} text={item} />
      ))}
      {ellipsis && <Pill text="..." />}
    </div>
  );
};
