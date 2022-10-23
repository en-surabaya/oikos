import { FC } from "react";

interface Props {
  zIndex?: number;
}

export const FormGroup: FC<Props> = ({ zIndex, children }) => {
  return <div className={`relative mb-6 w-full group`}>{children}</div>;
};
