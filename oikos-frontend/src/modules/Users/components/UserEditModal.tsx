import { Dialog } from "@headlessui/react";
import { FC } from "react";
import { Form } from "../../../components/Form";
import { Modal } from "../../../components/Modal/Modal";
import { useForm } from "react-hook-form";
import { DiscipleshipJourney, GetUserQueryResult, LeadershipStatus, useCreateUserMutation, User, useUpdateUserMutation } from "../../../generated/graphql";
import { FormMultipleComboBox } from "../../../components/Form/FormMultipleComboBox";
import { usePagination } from "../../../components/Pagination/PaginationProvider";
import { Biodata } from "../../../pages/people/PeopleDetail";

interface Props {
	showEdit: boolean;
	setShowEdit: Function;
	userId: number;
	biodata: Biodata;
	name: string;
}

export interface FormValues {
	name: string;
	email?: string;
	phone?: string;
	address?: string;
	gender?: string;
	dateOfBirth?: string;
	domain?: string;
}

export const UserEditModal: FC<Props> = ({ showEdit, setShowEdit, userId, biodata, name }) => {
	const { register, handleSubmit, reset, control } = useForm<FormValues>({
		defaultValues: {
			name,
			address: biodata.address,
			phone: biodata.phone,
			email: biodata.email,
			gender: biodata.gender,
			dateOfBirth: new Date().toISOString(),
		},
	});

	const [updateUser] = useUpdateUserMutation({});
	// const [createUser] = useCreateUserMutation({
	// 	refetchQueries: ["getUsersPaginated"],
	// });

	// const { refetch } = usePagination();

	const onSubmit = (data: FormValues) => {
		updateUser({
			variables: {
				userId,
				input: {
					...data,
				},
			},
		});
		reset();
		// refetch();
		setShowEdit(false);
	};

	return (
		<Modal show={showEdit} setShow={setShowEdit}>
			<Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
				<Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
					Edit New User
				</Dialog.Title>
				<div className="mt-4">
					<Form onSubmit={handleSubmit(onSubmit)}>
						<Form.Group>
							<Form.Group.Input label="Name" type="text" required placeholder=" " register={register("name")} />
						</Form.Group>
						<Form.Group>
							<Form.Group.Input label="Address" type="text" placeholder=" " register={register("address")} />
						</Form.Group>
						<Form.Group>
							<Form.Group.Input label="Gender" type="text" placeholder=" " register={register("gender")} />
						</Form.Group>
						<Form.Group>
							<Form.Group.Input label="Email Address" type="email" placeholder=" " register={register("email")} />
						</Form.Group>
						<Form.Group>
							<Form.Group.Input label="Phone" type="text" placeholder=" " register={register("phone")} />
						</Form.Group>
					</Form>
				</div>
			</Dialog.Panel>
		</Modal>
	);
};
