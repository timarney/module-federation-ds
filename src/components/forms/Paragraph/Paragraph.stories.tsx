import React from "react";
import { Paragraph } from "./Paragraph";

export default {
  title: "Forms/Paragraph",
  component: Paragraph,
  parameters: {
    info: `Paragraph component`,
  },
};

export const defaultParagraph = (): React.ReactElement => (
  <Paragraph
    text="This is a paragraph"
  />
);