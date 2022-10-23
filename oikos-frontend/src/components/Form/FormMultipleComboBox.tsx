import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { FC, Fragment, PropsWithChildren } from "react";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { PillGroup } from "../PillGroup/PillGroup";

type Props = {
  label: string;
};

const FormMultipleComboBoxRoot = <Type extends FieldValues>(
  props: PropsWithChildren<Props & UseControllerProps<Type>>
) => {
  const {
    field: { value, onChange, name },
  } = useController<Type>(props);

  return (
    <Listbox name={name} value={value} onChange={onChange} multiple>
      <div className="relative w-full mt-1">
        <Listbox.Button
          placeholder={value}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer"
        >
          <span className="block truncate min-h-[16px]">
            <PillGroup items={value as string[]} maxItem={2} />
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center h-full pr-2 pointer-events-none">
            <ChevronUpDownIcon
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Listbox.Label
          htmlFor={name}
          className={
            (value as string[]).length === 0
              ? "absolute pointer-events-none text-sm text-gray-500 scale-100 dark:text-gray-400 duration-300 transform -translate-y-1 top-3 origin-[0]"
              : "absolute pointer-events-none text-sm text-gray-500 dark:text-gray-400 duration-300 transform scale-75 -translate-y-6 left-0 top-3 origin-[0]"
          }
        >
          {props.label}
        </Listbox.Label>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-50 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {props.children}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

const ComboBoxOption: FC = ({ children }) => {
  return (
    <Listbox.Option
      className={({ active }) =>
        `z-50 relative cursor-default select-none py-2 pl-10 pr-4 ${
          active ? "bg-blue-100 text-blue-900" : "text-gray-900"
        }`
      }
      value={children}
    >
      {({ selected }) => (
        <>
          <span
            className={`block truncate ${
              selected ? "font-medium" : "font-normal"
            }`}
          >
            {children}
          </span>
          {selected ? (
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
              <CheckIcon className="w-5 h-5" aria-hidden="true" />
            </span>
          ) : null}
        </>
      )}
    </Listbox.Option>
  );
};

export const FormMultipleComboBox = Object.assign(FormMultipleComboBoxRoot, {
  Option: ComboBoxOption,
});
