import React from "react";
import classnames from "classnames";

interface H1Props {
  heading: string;
  id?: string;
  className?: string;
}

export const H1 = (props: H1Props): React.ReactElement => {
  const { heading, className, id } = props;

  const classes = classnames("gc-h1", className);

  return (
    <h1 data-testid="h1" className={classes} id={id}>
      {heading}
    </h1>
  );
};

export default H1;
