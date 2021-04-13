import React from "react";
import classnames from "classnames";

interface FooterProps {
  id?: string;
  className?: string;
}

export const Footer = (props: FooterProps): React.ReactElement => {
  const { className, id } = props;

  const classes = classnames("gc-footer", className);

  return (
    <footer data-testid="footer" className={classes} id={id}>
      <div className="gc-footer-container">
        <div>
          <ul>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
          </ul>
        </div>
        <div>
          <img alt="Fip alt text" src="./wmms-blk.svg" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
