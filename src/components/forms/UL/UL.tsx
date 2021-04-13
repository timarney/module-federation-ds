import React from "react";
import classnames from "classnames";

interface ULProps {
  options: string[];
  id?: string;
  className?: string;
}

export const UL = (props: ULProps): React.ReactElement => {
  const { options = [], className, id } = props;

  const classes = classnames("gc-ul", className);

  return (
    <ul data-testid="unordered-list" className={classes} id={id}>
      {options.map((listItem, index) => (
        <li id={listItem + "-" + index} key={listItem + "-key-" + index}>
          {listItem}
        </li>
      ))}
    </ul>
  );
};

export default UL;
