import React from "react";
import FormGroup from "../FormGroup/FormGroup";
import Checkbox from "../Checkbox/Checkbox";
import Label from "../Label/Label";
import Description from "../Description/Description";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface CheckboxesProps {
  options: string[];
  description?: string;
  validationStatus?: "error" | "success";
  hint?: string;
  label: string;
  id?: string;
  className?: string;
}

export const Checkboxes = (props: CheckboxesProps): React.ReactElement => {
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
        <Checkbox
          name={`${id}`}
          key={`key-${id}-${index}`}
          id={`id-${id}-${index}`}
          label={listItem}
        />
      ))}
    </FormGroup>
  );
};

export default Checkboxes;
