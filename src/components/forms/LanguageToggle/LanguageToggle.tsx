import React from "react";
import classnames from "classnames";

interface LanguageToggleProps {
  id?: string;
  className?: string;
}

export const LanguageToggle = (
  props: LanguageToggleProps
): React.ReactElement => {
  const { className, id } = props;

  const classes = classnames("gc-language-toggle", className);

  return (
    <React.Fragment>
      <h2 className="sr-only">Language Selection</h2>
      <div data-testid="language-toggle" className={classes} id={id}>
        <button lang="en">English</button>
      </div>
    </React.Fragment>
  );
};

export default LanguageToggle;
