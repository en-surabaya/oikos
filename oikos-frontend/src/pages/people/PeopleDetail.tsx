import { FC } from "react";
import { useParams } from "react-router-dom";
import { useGetUserQuery } from "../../generated/graphql";
type RouterParam = {
  id: string;
};
export const PeopleDetail: FC = () => {
  const { id } = useParams<RouterParam>();
  const { data } = useGetUserQuery({ variables: { id: id ? +id : 0 } });
  if (!data) {
    return <div>ndasmu</div>;
  }
  return <div>{data.result.name}</div>;
};
