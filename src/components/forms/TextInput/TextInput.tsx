import React from "react";
import classnames from "classnames";
import Label from "../Label/Label";
import Description from "../Description/Description";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

type TextInputRef =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

interface RequiredTextInputProps {
  id: string;
  name: string;
  label: string;
  type: "text" | "email" | "number" | "password" | "search" | "tel" | "url";
}

interface CustomTextInputProps {
  description?: string;
  className?: string;
  hint?: string;
  validationStatus?: "error" | "success";
  success?: boolean;
  inputSize?: "small" | "medium";
  inputRef?: TextInputRef;
}

export type OptionalTextInputProps = CustomTextInputProps &
  JSX.IntrinsicElements["input"];

export type TextInputProps = RequiredTextInputProps & OptionalTextInputProps;

export const TextInput = (props: TextInputProps): React.ReactElement => {
  const {
    id,
    name,
    type,
    className,
    description,
    label,
    validationStatus,
    inputRef,
    hint,
    ...inputProps
  } = props;

  const classes = classnames("gc-input-text", className);

  return (
    <React.Fragment>
      <Label hint={hint} htmlFor="input-type-text">{label}</Label>
      {description ? <Description>{description}</Description> : null}
      {validationStatus === "error" ? (
        <ErrorMessage>Helpful error message</ErrorMessage>
      ) : null}

      <input
        data-testid="textInput"
        className={classes}
        id={id}
        name={name}
        type={type}
        ref={inputRef}
        {...inputProps}
      />
    </React.Fragment>
  );
};

export default TextInput;
