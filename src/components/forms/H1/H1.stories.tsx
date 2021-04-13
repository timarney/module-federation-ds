import React from "react";
import { H1 } from "./H1";

export default {
  title: "Forms/H1",
  component: H1,
  parameters: {
    info: `H1 component`,
  },
};

export const defaultH1 = (): React.ReactElement => (
  <H1
    heading="This is a main page heading"
  />
);