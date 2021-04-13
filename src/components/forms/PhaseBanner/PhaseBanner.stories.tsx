import React from "react";
import { PhaseBanner } from "./PhaseBanner";

export default {
  title: "Forms/PhaseBanner",
  component: PhaseBanner,
  parameters: {
    info: `PhaseBanner component`,
  },
};

export const defaultPhaseBanner = (): React.ReactElement => (
  <PhaseBanner> This is a phase banner </PhaseBanner>
);