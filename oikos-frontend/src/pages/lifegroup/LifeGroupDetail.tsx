import { FC } from "react";
import { useParams } from "react-router-dom";
import { Avatar } from "../../components/Avatar/Avatar";
import { AvatarWithText } from "../../components/Avatar/AvatarWithText";
import { Clipboard } from "../../components/Clipboard/Clipboard";
import { ClipboardContent } from "../../components/Clipboard/ClipboardContent";
import { Section } from "../../components/Section/Section";
import { SectionContent } from "../../components/Section/SectionContent";
import { PillGroup } from "../../components/PillGroup/PillGroup";
import { useGetUserQuery, User } from "../../generated/graphql";
import { OffsetPaginationProvider } from "../../components/Pagination/OffsetPaginationProvider";
import { useGetUsersPaginated } from "../../modules/Users/query/getUsersPaginated";
import { UpcomingEventList } from "../../modules/LifeGroup/components/UpcomingEventList";
import { LifeGroupMemberDetailList } from "../../modules/LifeGroup/components/LifeGroupDetailMemberList";
type RouterParam = {
  id: string;
};
export const LifeGroupDetail: FC = () => {
  const { id } = useParams<RouterParam>();
  const { data } = useGetUserQuery({ variables: { id: id ? +id : 0 } });
  if (!data) {
    return <div>No Data</div>;
  }
  const leaders = data.result.leaders.map((value) => value.name);
  // const disciples = data.result.disciples.map((value) => value.name);
  // const discipleshipJourney = data.result.discipleshipJourney;
  // const biodata = {
  //   address: data.result.address || "",
  //   phone: data.result.phone || "",
  //   email: data.result.email || "",
  //   church: data.result.phone || "",
  //   gender: data.result.gender || "",
  //   birthDate: data.result.dateOfBirth || "",
  // };
  const lifegroups = data.result.lifeGroups.map(
    (value) => value.lifeGroup.title
  );

  return (
    <div className="w-full h-full">
      <div className="flex flex-col w-full h-full p-16 pt-24 space-y-12">
        <div className="flex items-center justify-between w-full">
          <div className="w-[40%]">
            <AvatarWithText
              name={data.result.name}
              tags={[data.result.status]}
            />
          </div>
          <button className="w-[40%]flex justify-end text-red-700 underline hover:text-red-900 active:text-red-500">
            Delete Life Group
          </button>
        </div>
        <div className="flex items-start justify-between w-full">
          <div className="w-[30%] flex flex-col h-full">
            <Clipboard title="Members">
              {/* {Object.keys(biodata).map((key: string) => { */}
              {/* return ( */}
              <ClipboardContent>
                <LifeGroupMemberDetailList></LifeGroupMemberDetailList>
              </ClipboardContent>
              {/* ); */}
              {/* })} */}
            </Clipboard>
          </div>
          <div className="w-[35%]">
            <div className="flex flex-col justify-between h-full">
              <Clipboard title="Events">
                <ClipboardContent>
                  <div className="flex items-start justify-between px-3">
                    <h1 className="px-1 mb-3 w-[60%]">Event Name</h1>
                    <h1 className="px-1 mb-3 w-[40%] text-right">
                      22 Feb 2023
                    </h1>
                  </div>
                  <div className="px-3">
                    <PillGroup
                      items={leaders.length > 0 ? leaders : ["I HAVE NOBODY"]}
                    />
                  </div>
                </ClipboardContent>
              </Clipboard>
            </div>
          </div>
          <div className="w-[30%]">
            <div className="flex flex-col justify-between h-[40%]">
              <Clipboard title="Schedule">
                {lifegroups.map((value) => (
                  <ClipboardContent>
                    <h1 className="px-5 mb-3">{value}</h1>
                    <hr className="border-dark-light"></hr>
                  </ClipboardContent>
                ))}
                <div className="py-1" />
              </Clipboard>
            </div>
            <div className="flex flex-col justify-between h-[40%] py-5">
              <Section title="Upcoming">
                <SectionContent>
                  <UpcomingEventList />
                  {/* <OffsetPaginationProvider
                    initialFilter={{}}
                    initialPage={{ skip: 0, take: 10 }}
                    paginationHook={useGetUsersPaginated}
                  >
                    {(query) => {
                      if (query.data.length > 0) {
                        return (
                          <>
                            <UpcomingEventList />
                          </>
                        );
                      }

                      if (query.data.length === 0) {
                        return (
                          <>
                            <div className="flex justify-center text-gray-500">
                              No Event Found
                            </div>
                          </>
                        );
                      }
                    }}
                  </OffsetPaginationProvider> */}
                </SectionContent>
              </Section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
