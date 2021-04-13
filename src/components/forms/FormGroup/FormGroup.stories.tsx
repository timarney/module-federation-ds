import React from "react";
import { FormGroup } from "./FormGroup";
import { TextInput } from "../TextInput/TextInput";


export default {
  title: "Forms/FormGroup",
  component: FormGroup,
  parameters: {
    info: `
USWDS 2.0 FormGroup component

Source: https://designsystem.digital.gov/components/form-templates/
`,
  },
};

export const textInputFormGroup = (): React.ReactElement => (
  <FormGroup name="1">
    <TextInput
      label="Please enter your email address"
      description="Example: jonbovi@gmail.com"
      id="input-type-text"
      name="input-type-text"
      type="text"
    />
  </FormGroup>
);

export const textInputErrorFormGroup = (): React.ReactElement => (
  <FormGroup name="1">
    <TextInput
      label="Please enter your email address"
      description="Example: jonbovi@gmail.com"
      id="input-type-text"
      name="input-type-text"
      type="text"
      hint="(optional)"
      validationStatus="error"
    />
  </FormGroup>
);
