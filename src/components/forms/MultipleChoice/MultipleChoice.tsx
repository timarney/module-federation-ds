import React from "react";
import FormGroup from "../FormGroup/FormGroup";
import Radio from "../Radio/Radio";
import Label from "../Label/Label";
import Description from "../Description/Description";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface MultipleChoiceProps {
  options: string[];
  description?: string;
  hint?: string;
  validationStatus?: "error" | "success";
  label: string;
  id?: string;
  className?: string;
}

export const MultipleChoice = (
  props: MultipleChoiceProps
): React.ReactElement => {
  const {
    options = [],
    id,
    label,
    description,
    hint,
    validationStatus,
  } = props;

  return (
    <FormGroup name={`${id}`}>
      <Label hint={hint} htmlFor={`${id}`}>
        {label}
      </Label>
      {description ? <Description>{description}</Description> : null}
      {validationStatus === "error" ? (
        <ErrorMessage>Helpful error message</ErrorMessage>
      ) : null}
      {options.map((listItem, index) => (
        <Radio
          name={`${id}`}
          key={`key-${id}-${index}`}
          id={`id-${id}-${index}`}
          label={listItem}
          value={listItem}
        />
      ))}
    </FormGroup>
  );
};

export default MultipleChoice;
