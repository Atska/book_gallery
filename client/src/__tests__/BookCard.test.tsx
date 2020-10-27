import React from "react";
import "@testing-library/jest-dom/extend-expect";
import BookCard, { Props } from "../components/BookCard";
import { render, waitForElement } from "@testing-library/react";

describe("<BookCard />", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(
      <BookCard
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
    expect(getByTestId("book-card")).toBeTruthy();
  });
});
