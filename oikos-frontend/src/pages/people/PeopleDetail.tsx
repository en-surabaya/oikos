import { FC } from "react";
import { useParams } from "react-router-dom";
import { Avatar } from "../../components/Avatar/Avatar";
import { AvatarWithText } from "../../components/Avatar/AvatarWithText";
import { Clipboard } from "../../components/Clipboard/Clipboard";
import { ClipboardContent } from "../../components/Clipboard/ClipboardContent";
import { PillGroup } from "../../components/PillGroup/PillGroup";
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
          <div className="w-[30%] flex flex-col">
            <Clipboard title="Bio">
              <ClipboardContent>
                <div className="flex justify-start w-full px-4">
                  <div className="flex justify-between w-[40%]">
                    <h1>Address</h1>
                    <h1>:</h1>
                  </div>
                  <h1 className="w-[60%] ml-2">Royal Residence No. 1</h1>
                </div>
              </ClipboardContent>
              <ClipboardContent>
                <div className="flex justify-start w-full px-4">
                  <div className="flex justify-between w-[40%]">
                    <h1>Phone</h1>
                    <h1>:</h1>
                  </div>
                  <h1 className="w-[60%] ml-2">+62811111111</h1>
                </div>
              </ClipboardContent>
              <ClipboardContent>
                <div className="flex justify-start w-full px-4">
                  <div className="flex justify-between w-[40%]">
                    <h1>Email</h1>
                    <h1>:</h1>
                  </div>
                  <h1 className="w-[60%] ml-2">xoffel@gmail.com</h1>
                </div>
              </ClipboardContent>
              <ClipboardContent>
                <div className="flex justify-start w-full px-4">
                  <div className="flex justify-between w-[40%]">
                    <h1>Church</h1>
                    <h1>:</h1>
                  </div>
                  <h1 className="w-[60%] ml-2">EN Surabaya Barat</h1>
                </div>
              </ClipboardContent>
              <ClipboardContent>
                <div className="flex justify-start w-full px-4">
                  <div className="flex justify-between w-[40%]">
                    <h1>Gender</h1>
                    <h1>:</h1>
                  </div>
                  <h1 className="w-[60%] ml-2">Male</h1>
                </div>
              </ClipboardContent>
              <ClipboardContent>
                <div className="flex justify-start w-full px-4">
                  <div className="flex justify-between w-[40%]">
                    <h1>Birth Date</h1>
                    <h1>:</h1>
                  </div>
                  <h1 className="w-[60%] ml-2">30 February 2000</h1>
                </div>
              </ClipboardContent>
              <div className="py-16" />
            </Clipboard>
          </div>
          <div className="w-[35%]">
            <div className="flex flex-col justify-between h-[40%]">
              <Clipboard title="Handled By">
                <ClipboardContent>
                  <div className="px-3">
                    <PillGroup items={["Yotam Hezron", "Benny Koesno", "+"]} />
                  </div>
                </ClipboardContent>
              </Clipboard>
            </div>
            <div className="flex flex-col justify-between h-[40%]">
              <Clipboard title="Handling">
                <ClipboardContent>
                  <div className="px-3">
                    <PillGroup
                      items={[
                        "Enoch",
                        "Enoch",
                        "Enoch",
                        "Enoch",
                        "Enoch",
                        "Enoch",
                      ]}
                    />
                  </div>
                </ClipboardContent>
              </Clipboard>
            </div>
          </div>
          <div className="w-[30%]">
            <div className="flex flex-col justify-between h-[40%]">
              <Clipboard title="Lifegroup">
                <ClipboardContent>
                  <h1 className="px-5 mb-3">Ukp Guys</h1>
                  <hr className="border-dark-light"></hr>
                </ClipboardContent>
                <ClipboardContent>
                  <h1 className="px-5 mb-3">Timur Genk</h1>
                  <hr className="border-dark-light"></hr>
                </ClipboardContent>
                <div className="py-1" />
              </Clipboard>
            </div>
            <div className="flex flex-col justify-between h-[40%]">
              <Clipboard title="History">
                <ClipboardContent>
                  <h1 className="px-5 mb-3">One 2 One</h1>
                  <hr className="border-dark-light"></hr>
                </ClipboardContent>
                <ClipboardContent>
                  <h1 className="px-5 mb-3">Victory Weekend</h1>
                  <hr className="border-dark-light"></hr>
                </ClipboardContent>
                <ClipboardContent>
                  <h1 className="px-5 mb-3">Church Community</h1>
                  <hr className="border-dark-light"></hr>
                </ClipboardContent>
                <div className="py-1" />
              </Clipboard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
