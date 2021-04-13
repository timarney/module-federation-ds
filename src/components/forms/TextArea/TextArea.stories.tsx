import React from "react";
import { TextArea } from "./TextArea";

export default {
  title: "Forms/TextArea",
  component: TextArea,
  parameters: {
    info: `TextArea component`,
  },
};

export const defaultTextArea = (): React.ReactElement => (
  <React.Fragment>
    <TextArea
      label="TextArea label"
      description="This is a TextArea description"
      id="input-type-text"
      name="input-type-text"
      validationStatus="error"
      hint="(Errors)"
    />

    <TextArea
      label="TextArea label"
      description="This is a TextArea description"
      id="input-type-text"
      name="input-type-text"
      hint="(No Errors)"
      validationStatus="success"
    />
  </React.Fragment>
);

export const withDefaultValue = (): React.ReactElement => (
  <TextArea
    label="TextArea label"
    id="input-value"
    name="input-value"
    defaultValue="Change me"
  />
);

export const withPlaceholder = (): React.ReactElement => (
  <TextArea
    label="TextArea label"
    id="input-type-text"
    name="input-type-text"
    placeholder="Enter value"
  />
);

export const disabled = (): React.ReactElement => (
  <TextArea
    label="TextArea label"
    id="input-disabled"
    name="input-disabled"
    disabled
  />
);

export const readonly = (): React.ReactElement => (
  <TextArea
    label="TextArea label"
    id="input-readonly"
    name="input-readonly"
    readOnly
  />
);

defaultTextArea.parameters = {
  docs: {
    source: {
      code:
        '<label class="gc-textarea-label"><span class="ml-4">Enter text</span><textarea class="gc-textarea"></textarea></label>',
    },
  },
};
