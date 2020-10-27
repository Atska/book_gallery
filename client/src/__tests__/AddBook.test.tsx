import React from "react";
import "@testing-library/jest-dom/extend-expect";
import AddBookButton from "../components/buttons/AddBook";
import { render, waitForElement } from "@testing-library/react";

describe("<AddBookButton", () => {
  it("should render the button and its name.", () => {
    const { getByTestId } = render(<AddBookButton />);
    expect(getByTestId("addBook-btn")).toBeTruthy();
    expect(getByTestId("add-btn")).toHaveTextContent("Add Book");
  });
});
