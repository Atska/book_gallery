import React from "react";
import "@testing-library/jest-dom/extend-expect";
import DeleteButton from "../components/buttons/DeleteBook";
import { render, waitForElement } from "@testing-library/react";

describe("<DeleteButton", () => {
  it("should render the button.", () => {
    const { getByTestId } = render(<DeleteButton book_id={1} />);
    expect(getByTestId("delete-btn")).toBeTruthy();
  });
});
