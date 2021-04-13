import React from "react";
import classnames from "classnames";

interface H2Props {
  heading: string;
  id?: string;
  className?: string;
}

export const H2 = (props: H2Props): React.ReactElement => {
  const { heading, className, id } = props;

  const classes = classnames("gc-h2", className);

  return (
    <h2 data-testid="h2" className={classes} id={id}>
      {heading}
    </h2>
  );
};

export default H2;
