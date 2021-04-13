import React from "react";
import { Dropdown } from "./Dropdown";

export default {
  title: "Forms/Dropdown",
  component: Dropdown,
  parameters: {
    info: `Dropdown component`,
  },
};

export const defaultDropdown = (): React.ReactElement => (
  <Dropdown
    key="id"
    id="id"
    name="province"
    validationStatus="success"
    label="Select a province"
    description="We are looking for the province you currently live in"
    choices={[
      "",
      "Alberta",
      "British Columbia",
      "Manitoba",
      "New Brunswick",
      "Newfoundland",
      "Northwest Territories",
      "Nova Scotia",
      "Nunavut",
      "Ontario",
      "Prince Edward Island",
      "Quebec",
      "Saskatchewan",
      "Yukon",
    ]}
  />
);

export const DropdownWithErrorMessage = (): React.ReactElement => (
  <Dropdown
    key="id"
    id="id"
    name="province"
    validationStatus="error"
    label="Select a province"
    hint="(optional)"
    description="We are looking for the province you currently live in"
    choices={[
      "",
      "Alberta",
      "British Columbia",
      "Manitoba",
      "New Brunswick",
      "Newfoundland",
      "Northwest Territories",
      "Nova Scotia",
      "Nunavut",
      "Ontario",
      "Prince Edward Island",
      "Quebec",
      "Saskatchewan",
      "Yukon",
    ]}
  />
);

defaultDropdown.parameters = {
  docs: {
    source: {
      code:
        '<select class="gc-dropdown" name="support_type"><option value="GC Form - First option">GC Form - First option</option><option value="GC Form - Second option">GC Form - Second option</option></select>',
    },
  },
};
