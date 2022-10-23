import { Dialog } from "@headlessui/react";
import { FC } from "react";
import { Form } from "../../../components/Form";
import { Modal } from "../../../components/Modal/Modal";
import { useForm } from "react-hook-form";
import {
  DiscipleshipJourney,
  LeadershipStatus,
  useCreateUserMutation,
} from "../../../generated/graphql";
import { FormMultipleComboBox } from "../../../components/Form/FormMultipleComboBox";
import { usePagination } from "../../../components/Pagination/PaginationProvider";

interface Props {
  showAdd: boolean;
  setShowAdd: Function;
}

export interface FormValues {
  name: string;
  status: LeadershipStatus[];
  discipleshipJourney: DiscipleshipJourney[];
  email?: string;
  phone?: string;
}

export const UserAddModal: FC<Props> = ({ showAdd, setShowAdd }) => {
  const { register, handleSubmit, reset, control } = useForm<FormValues>({
    defaultValues: { status: [], discipleshipJourney: [] },
  });
  const [createUser] = useCreateUserMutation({ refetchQueries: ["getUsers"] });

  const { refetch } = usePagination();

  const onSubmit = (data: FormValues) => {
    createUser({
      variables: {
        input: {
          ...data,
        },
      },
    });
    reset();
    refetch();
    setShowAdd(false);
  };

  return (
    <Modal show={showAdd} setShow={setShowAdd}>
      <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
        <Dialog.Title
          as="h3"
          className="text-lg font-medium leading-6 text-gray-900"
        >
          Add New User
        </Dialog.Title>
        <div className="mt-4">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <Form.Group.Input
                label="Name"
                type="text"
                required
                placeholder=" "
                register={register("name")}
              />
            </Form.Group>
            <Form.Group zIndex={50}>
              <FormMultipleComboBox
                label="Role"
                name="status"
                control={control}
              >
                {(
                  Object.keys(
                    LeadershipStatus
                  ) as (keyof typeof LeadershipStatus)[]
                ).map((stat) => (
                  <FormMultipleComboBox.Option
                    key={`LeadershipStatusCombobox-${stat}`}
                  >
                    {LeadershipStatus[stat]}
                  </FormMultipleComboBox.Option>
                ))}
              </FormMultipleComboBox>
            </Form.Group>
            <Form.Group>
              <FormMultipleComboBox
                label="Discipleship Journey"
                name="discipleshipJourney"
                control={control}
              >
                {(
                  Object.keys(
                    DiscipleshipJourney
                  ) as (keyof typeof DiscipleshipJourney)[]
                ).map((dj) => (
                  <FormMultipleComboBox.Option
                    key={`DiscipleshipJourneyComboBox-${dj}`}
                  >
                    {DiscipleshipJourney[dj]}
                  </FormMultipleComboBox.Option>
                ))}
              </FormMultipleComboBox>
            </Form.Group>
            <Form.Group>
              <Form.Group.Input
                label="Email Address"
                type="email"
                placeholder=" "
                register={register("email")}
              />
            </Form.Group>
            <Form.Group>
              <Form.Group.Input
                label="Phone"
                type="text"
                placeholder=" "
                register={register("phone")}
              />
            </Form.Group>
          </Form>
        </div>
      </Dialog.Panel>
    </Modal>
  );
};
