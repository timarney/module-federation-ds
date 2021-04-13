import React from "react";
import { UL } from "./UL";

export default {
  title: "Forms/UL",
  component: UL,
  parameters: {
    info: `UL component`,
  },
};

export const defaultMultipleChoice = (): React.ReactElement => (
  <UL
    id="test"
    options={["Community accessibility", "Workplace accessibility"]}
  />
);
