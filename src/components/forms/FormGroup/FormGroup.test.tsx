import React from "react"
import { render } from "@testing-library/react"

import { FormGroup } from "./FormGroup"

describe("FormGroup component", () => {
  it("renders without errors", () => {
    const { queryByTestId } = render(<FormGroup name="1">My Form Group</FormGroup>)
    expect(queryByTestId("formGroup")).toBeInTheDocument()
  })

  it("renders its children", () => {
    const { queryByText } = render(<FormGroup name="1">My Form Group</FormGroup>)
    expect(queryByText("My Form Group")).toBeInTheDocument()
  })
})
