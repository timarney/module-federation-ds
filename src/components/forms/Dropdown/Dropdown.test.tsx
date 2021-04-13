import React from "react";
import { render } from "@testing-library/react";

import { Dropdown } from "./Dropdown";

describe("Dropdown component", () => {
  it("renders without errors", () => {
    const { queryByTestId } = render(
      <Dropdown
        label="Dropdown label"
        choices={["- Select -", "Option A", "Option B", "Option C"]}
        id="input-type-text"
        name="input-type-text"
      />
    );
    expect(queryByTestId("dropdown")).toBeInTheDocument();
  });
});
