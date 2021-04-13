import React from "react";
import classnames from "classnames";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Label from "../Label/Label";
import Description from "../Description/Description";

type TextAreaRef =
  | string
  | string
  | ((instance: HTMLTextAreaElement | null) => void)
  | React.RefObject<HTMLTextAreaElement>
  | null
  | undefined;

export interface TextAreaProps {
  id: string;
  name: string;
  label: string;
  description?: string;
  className?: string;
  hint?: string;
  validationStatus?: "error" | "success";
  children?: React.ReactNode;
  inputRef?: TextAreaRef;
}

export const TextArea = (
  props: TextAreaProps & JSX.IntrinsicElements["textarea"]
): React.ReactElement => {
  const {
    id,
    name,
    className,
    label,
    description,
    children,
    hint,
    inputRef,
    validationStatus,
    ...inputProps
  } = props;

  const classes = classnames("gc-textarea", className);

  return (
    <React.Fragment>
      <Label hint={hint} htmlFor="input-type-text">
        {label}
      </Label>
      {description ? <Description>{description}</Description> : null}
      {validationStatus === "error" ? (
        <ErrorMessage>Helpful error message</ErrorMessage>
      ) : null}
      <textarea
        data-testid="textarea"
        className={classes}
        id={id}
        name={name}
        ref={inputRef}
        {...inputProps}
      >
        {children}
      </textarea>
    </React.Fragment>
  );
};

export default TextArea;
