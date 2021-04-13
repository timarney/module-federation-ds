import React from "react";
import { FIP } from "./FIP";

export default {
  title: "Forms/FIP",
  component: FIP,
  parameters: {
    info: `FIP component`,
  },
};

export const defaultFIP = (): React.ReactElement => (
  <FIP
    href="https://www.google.ca"
    ariaLabel="this is an aria-label"
    src="./sig-blk-en.svg"
    alt="this is alt-text"
  />
);