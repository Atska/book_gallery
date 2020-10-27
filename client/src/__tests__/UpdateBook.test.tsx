import React from "react";
import "@testing-library/jest-dom/extend-expect";
import UpdateButton from "../components/buttons/UpdateBook";
import { render, waitForElement } from "@testing-library/react";

describe("<AddBookButton", () => {
  it("should render the button and its name.", () => {
    const { getByTestId } = render(
      <UpdateButton
        author="text"
        blurp="text"
        isbn="text"
        series="text"
        title="text"
        link="text"
        published="text"
        book_id={34}
      />
    );
    expect(getByTestId("upload-btn")).toBeTruthy();
  });
});
