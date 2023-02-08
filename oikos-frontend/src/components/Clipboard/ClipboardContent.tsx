import { FC } from "react";

interface Props {}

export const ClipboardContent: FC<Props> = ({ children }) => {
  return <div className="w-full">{children}</div>;
};
