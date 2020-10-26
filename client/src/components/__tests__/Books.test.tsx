import React from "react";
import "@testing-library/jest-dom/extend-expect";
import Books from "../Books";
import { render } from "@testing-library/react";

describe("Books", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<Books />);
    expect(getByTestId("books")).toBeTruthy();
  });
});
