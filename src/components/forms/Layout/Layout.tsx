import React from "react";
import classnames from "classnames";

import PhaseBanner from "../PhaseBanner/PhaseBanner";
import FIP from "../FIP/FIP";
import Footer from "../Footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const EsdcMockup = (props: LayoutProps): React.ReactElement => {
  const { children, className, id } = props;

  const classes = classnames("gc-layout", className);

  return (
    <React.Fragment>
      <PhaseBanner>This is a prototype and won't submit data</PhaseBanner>
      <FIP
        href="https://www.google.ca"
        ariaLabel="this is an aria-label"
        src="./sig-blk-en.svg"
        alt="this is alt-text"
      />
      <div className="gc-layout-container">{children}</div>
      <div data-testid="footer" className={classes} id={id}></div>
      <Footer />
    </React.Fragment>
  );
};

export default EsdcMockup;
