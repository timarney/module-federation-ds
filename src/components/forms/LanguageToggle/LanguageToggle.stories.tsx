import React from "react";
import { LanguageToggle } from "./LanguageToggle";

export default {
  title: "Forms/LanguageToggle",
  component: LanguageToggle,
  parameters: {
    info: `Language Toggle component`,
  },
};

export const defaultLanguageToggle = (): React.ReactElement => (
  <LanguageToggle  />
);