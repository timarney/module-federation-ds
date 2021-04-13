import React from "react";
import { Fieldset } from "./Fieldset";

import { Label } from "../Label/Label";
import { TextInput } from "../TextInput/TextInput";
import { Description } from "../Description/Description";

export default {
  title: "Forms/Fieldset",
  component: Fieldset,
  parameters: {
    info: `Fieldset component`,
  },
};

export const nameFieldset = (): React.ReactElement => (
  <Fieldset legend="Please enter your name in the fields below">
    <TextInput label="Title" description="Examples: Mister, Doctor etc." id="title" name="title" type="text" inputSize="small" />
    <TextInput label="First Name" id="first-name" name="first-name" type="text" />
    <TextInput label="Middle Name" description="If you have two, please specify both" id="middle-name" name="middle-name" type="text" />
    <TextInput label="Last Name" id="last-name" name="last-name" type="text" />
  </Fieldset>
);
