import { FC } from "react";

interface Props {
  text: string;
}

export const Pill: FC<Props> = ({ text }) => {
  return <div className="pl-2 pr-2 pt-1 pb-1 rounded-lg bg-secondary">{text}</div>;
};
