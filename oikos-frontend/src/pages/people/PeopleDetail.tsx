import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { Avatar } from "../../components/Avatar/Avatar";
import { AvatarWithText } from "../../components/Avatar/AvatarWithText";
import { Clipboard } from "../../components/Clipboard/Clipboard";
import { ClipboardContent } from "../../components/Clipboard/ClipboardContent";
import { PillGroup } from "../../components/PillGroup/PillGroup";
import { useGetUserQuery, User } from "../../generated/graphql";
import { UserEditModal } from "../../modules/Users/components/UserEditModal";
import { capitalize } from "lodash";
type RouterParam = {
	id: string;
};

export interface Biodata {
	address: string;
	phone: string;
	email: string;
	church: string;
	gender: string;
	birthDate: string;
}
export const PeopleDetail: FC = () => {
	const [showBioEdit, setShowBioEdit] = useState(false);
	const { id } = useParams<RouterParam>();
	const { data } = useGetUserQuery({ variables: { id: id ? +id : 0 } });
	if (!data || !id || !data.result) {
		return <div>ndasmu</div>;
	}
	const leaders = data.result.leaders.map((value) => value.name);
	const disciples = data.result.disciples.map((value) => value.name);
	const discipleshipJourney = data.result.discipleshipJourney;
	const biodata: Biodata = {
		address: data.result.address || "",
		phone: data.result.phone || "",
		email: data.result.email || "",
		church: data.result.phone || "",
		gender: data.result.gender || "",
		birthDate: data.result.dateOfBirth || "",
	};
	const lifegroups = data.result.lifeGroups.map((value) => value.lifeGroup.title);
	function capitalizeFirstLetter(str: string): string {
		return str.charAt(0).toUpperCase() + str.slice(1);
	  }

	return (
		<div className="w-full h-full">
			<UserEditModal showEdit={showBioEdit} setShowEdit={setShowBioEdit} userId={+id} biodata={biodata} name={data.result.name} />
			<div className="flex flex-col w-full h-full p-16 pt-24 space-y-12">
				<div className="flex items-center justify-between w-full">
					<div className="w-[40%]">
						<AvatarWithText name={data.result.name} tags={[data.result.status]} />
					</div>
					<button className="w-[40%]flex justify-end text-red-700 underline hover:text-red-900 active:text-red-500">Delete Profile</button>
				</div>
				<div className="flex items-start justify-between w-full">
					<div className="w-[30%] flex flex-col h-full">
						<Clipboard title="Bio" onButtonClick={() => setShowBioEdit(true)}>
							{Object.keys(biodata).map((key: string) => {
								return (
									<ClipboardContent>
										<div className="flex justify-start w-full px-4">
											<div className="flex justify-between w-[40%]">
												<h1>{capitalizeFirstLetter(key)}</h1>
												<h1>:</h1>
											</div>
											<h1 className="w-[60%] ml-2">{biodata[key as keyof typeof biodata]}</h1>
										</div>
									</ClipboardContent>
								);
							})}
						</Clipboard>
					</div>
					<div className="w-[35%]">
						<div className="flex flex-col justify-between h-[40%]">
							<Clipboard title="Handled By">
								<ClipboardContent>
									<div className="px-3">
										<PillGroup items={leaders.length > 0 ? leaders : ["I HAVE NOBODY"]} />
									</div>
								</ClipboardContent>
							</Clipboard>
						</div>
						<div className="flex flex-col justify-between h-[40%]">
							<Clipboard title="Handling">
								<ClipboardContent>
									<div className="px-3">
										<PillGroup items={disciples.length > 0 ? disciples : ["MASIH BERDOSA"]} />
									</div>
								</ClipboardContent>
							</Clipboard>
						</div>
					</div>
					<div className="w-[30%]">
						<div className="flex flex-col justify-between h-[40%]">
							<Clipboard title="Lifegroup">
								{lifegroups.map((value) => (
									<ClipboardContent>
										<h1 className="px-5 mb-3">{value}</h1>
										<hr className="border-dark-light"></hr>
									</ClipboardContent>
								))}
								<div className="py-1" />
							</Clipboard>
						</div>
						<div className="flex flex-col justify-between h-[40%]">
							<Clipboard title="Discipleship Journey">
								{discipleshipJourney.map((value) => (
									<ClipboardContent>
										<h1 className="px-5 mb-3">{value}</h1>
										<hr className="border-dark-light"></hr>
									</ClipboardContent>
								))}
								<div className="py-1" />
							</Clipboard>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
