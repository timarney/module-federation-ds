import React from "react";
import { SectionHeader } from "./SectionHeader";

export default {
  title: "Forms/SectionHeader",
  component: SectionHeader,
  parameters: {
    info: `SectionHeader component`,
  },
};

export const defaultSectionHeader = (): React.ReactElement => (
  <SectionHeader> This is a section header </SectionHeader>
);