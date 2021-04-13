import React from "react";
import { Footer } from "./Footer";

export default {
  title: "Forms/Footer",
  component: Footer,
  parameters: {
    info: `Footer component`,
  },
};

export const defaultFooter = (): React.ReactElement => (
  <Footer />
);