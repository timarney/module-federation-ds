import React from "react";
import { H2 } from "./H2";

export default {
  title: "Forms/H2",
  component: H2,
  parameters: {
    info: `H2 component`,
  },
};

export const defaultH2 = (): React.ReactElement => (
  <H2
    heading="This is an h2 heading"
  />
);