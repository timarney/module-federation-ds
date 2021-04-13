import React from "react";
import classnames from "classnames";
import Label from "../Label/Label";
import Description from "../Description/Description";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface DropdownProps {
  id: string;
  name: string;
  label: string;
  description?: string;
  validationStatus?: "error" | "success";
  className?: string;
  hint ?: string;
  choices: Array<string | number>;
  children?: React.ReactNode;
  inputRef?:
    | string
    | ((instance: HTMLSelectElement | null) => void)
    | React.RefObject<HTMLSelectElement>
    | null
    | undefined;
}

interface DropdownOptionProps {
  name: string | number;
  value: string | number;
}

const DropdownOption = (props: DropdownOptionProps): React.ReactElement => {
  return (
    <option key={`${props.value}-key`} value={props.value}>
      {props.name}
    </option>
  );
};

export const Dropdown = (props: DropdownProps): React.ReactElement => {
  const {
    id,
    name,
    className,
    inputRef,
    choices,
    hint,
    label,
    description,
    validationStatus,
    ...inputProps
  } = props;

  const classes = classnames("gc-dropdown", className);

  let options = null;
  if (choices && choices.length) {
    options = choices.map((choice, i) => {
      return (
        <DropdownOption
          key={`${choice}-key-${i}`}
          value={choice}
          name={choice}
        />
      );
    });
  }

  return (
    <React.Fragment>
      <Label hint={hint} htmlFor="options">{label}</Label>
      {description ? <Description>{description}</Description> : null}
      {validationStatus === "error" ? (
        <ErrorMessage>Helpful error message</ErrorMessage>
      ) : null}
      <select
        data-testid="dropdown"
        className={classes}
        id={id}
        name={name}
        ref={inputRef}
        {...inputProps}
      >
        <>{options}</>
      </select>
    </React.Fragment>
  );
};

export default Dropdown;
