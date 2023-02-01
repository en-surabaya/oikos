import { FC } from "react";
import { useParams } from "react-router-dom";
import { Avatar } from "../../components/Avatar/Avatar";
import { AvatarWithText } from "../../components/Avatar/AvatarWithText";
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
  return (
    <div className="w-full h-full">
      <div className="flex flex-col w-full h-full p-16 pt-24 space-y-12">
        <div className="flex items-center justify-between w-full">
          <div className="w-[40%]">
            <AvatarWithText
              name={data.result.name}
              tags={["Makmu", "Makku", "BapakMu", "BapakKu"]}
            />
          </div>
          <button className="w-[40%]flex justify-end text-red-700 underline hover:text-red-900 active:text-red-500">
            Delete Profile
          </button>
        </div>
        <div className="flex items-start justify-between w-full">
          <div className="w-[25%] bg-amber-200">a</div>
          <div className="w-[25%] bg-amber-200">
            <div className="flex flex-col justify-between h-[40%] bg-blue-400">
              a
            </div>
            <div className="flex flex-col justify-between h-[40%] bg-blue-400">
              a
            </div>
          </div>
          <div className="w-[25%] bg-amber-200">
            <div className="flex flex-col justify-between h-[40%] bg-blue-400">
              a
            </div>
            <div className="flex flex-col justify-between h-[40%] bg-blue-400">
              a
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
