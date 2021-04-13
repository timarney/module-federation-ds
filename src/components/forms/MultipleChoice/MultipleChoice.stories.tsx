import React from "react";
import { MultipleChoice } from "./MultipleChoice";

export default {
  title: "Forms/MultipleChoice",
  component: MultipleChoice,
  parameters: {
    info: `MultipleChoice component`,
  },
};

export const defaultMultipleChoice = (): React.ReactElement => (
  <React.Fragment>
    <MultipleChoice
      id="1"
      label="Funding Requested"
      options={["Community accessibility", "Workplace accessibility"]}
      description="Select the option that best applies to you"
      hint="(optional)"
      validationStatus="error"
    />

    <MultipleChoice
      id="1"
      label="Funding Requested"
      options={["Community accessibility", "Workplace accessibility"]}
      validationStatus="success"
      hint="(No Errors)"
    />
  </React.Fragment>
);
