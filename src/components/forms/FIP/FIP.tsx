import React from "react";
import classnames from "classnames";
import LanguageToggle from "../LanguageToggle/LanguageToggle";

interface FIPProps {
  href: string,
  ariaLabel: string,
  src: string,
  alt: string,
  id?: string;
  className?: string;
}

export const FIP = (props: FIPProps): React.ReactElement => {
  const { href, ariaLabel, src, alt, className, id } = props;

  const classes = classnames("gc-fip", className);

  return (
    <div data-testid="fip" className={classes} id={id}>
      <div className="canada-flag">
        <a href={href} aria-label={ariaLabel}>
          <img
            src={src}
            alt={alt}
          />
        </a>
      </div>
      <LanguageToggle />
    </div>
  );
};

export default FIP;
