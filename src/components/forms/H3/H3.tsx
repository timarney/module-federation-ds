import React from "react";
import classnames from "classnames";

interface H3Props {
  heading: string;
  id?: string;
  className?: string;
}

export const H3 = (props: H3Props): React.ReactElement => {
  const { heading, className, id } = props;

  const classes = classnames("gc-h3", className);

  return (
    <h3 data-testid="h3" className={classes} id={id}>
      {heading}
    </h3>
  );
};

export default H3;
