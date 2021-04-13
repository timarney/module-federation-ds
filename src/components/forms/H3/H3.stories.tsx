import React from "react";
import { H3 } from "./H3";

export default {
  title: "Forms/H3",
  component: H3,
  parameters: {
    info: `H3 component`,
  },
};

export const defaultH3 = (): React.ReactElement => (
  <H3
    heading="This is an h3 heading"
  />
);