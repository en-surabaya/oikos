import { FC } from "react";

interface Props {}

export const SectionContent: FC<Props> = ({ children }) => {
  return <div className="w-full">{children}</div>;
};
