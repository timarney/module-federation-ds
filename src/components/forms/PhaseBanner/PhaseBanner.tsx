import React from "react";
import classnames from "classnames";

interface PhaseBannerProps {
  children: string;
  id?: string;
  className?: string;
}

export const PhaseBanner = (props: PhaseBannerProps): React.ReactElement => {
  const { children, className, id } = props;

  const classes = classnames("gc-phase-banner", className);

  return (
    <div data-testid="PhaseBanner" className={classes} id={id}>
      <div>
        <span>ALPHA</span>
        <span>{children}</span>
      </div>
    </div>
  );
};

export default PhaseBanner;
