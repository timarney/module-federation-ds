import React from "react";
import { Checkboxes } from "./Checkboxes";

export default {
  title: "Forms/Checkboxes",
  component: Checkboxes,
  parameters: {
    info: `Checkboxes component`,
  },
};

export const defaultMultipleChoice = (): React.ReactElement => (
  <Checkboxes
    id="1"
    label="Checkbox label"
    options={["Checkbox value 1", "Checkbox value 2"]}
  />
);

export const multipleChoiceWithError = (): React.ReactElement => (
  <React.Fragment>
    <Checkboxes
      id="1"
      label="Checkbox label error"
      hint="(optional)"
      description="Check all the options that apply to you"
      validationStatus="error"
      options={[
        "Checkbox value 1",
        "Checkbox value 2",
        "Checkbox value 3",
        "Checkbox value 4",
      ]}
    />

    <Checkboxes
      id="1"
      label="Checkbox label with description"
      hint="(optional)"
      description="Check all the options that apply to you"
      validationStatus="success"
      options={[
        "Checkbox value 1",
        "Checkbox value 2",
        "Checkbox value 3",
        "Checkbox value 4",
      ]}
    />
  </React.Fragment>
);
