import React from "react";
import "@testing-library/jest-dom/extend-expect";
import NavBar from "../NavBar";
import { render } from "@testing-library/react";

describe("<NavBar />", () => {
  it("should render the NavBar", () => {
    const { getByTestId } = render(<NavBar />);
    expect(getByTestId("navbar")).toBeTruthy();
  });

  it("should display the title.", () => {
    const { getByTestId } = render(<NavBar />);
    expect(getByTestId("navbar")).toHaveTextContent("Book Gallery");
  });
});
