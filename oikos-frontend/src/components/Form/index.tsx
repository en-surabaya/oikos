import { FormGroup } from "./FormGroup";
import { FormInput } from "./FormInput";
import { FormRoot } from "./FormRoot";

export const Form = Object.assign(FormRoot, {
  Group: Object.assign(FormGroup, {
    Input: FormInput,
  }),
});
