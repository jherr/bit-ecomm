import React from "react";
import { render } from "@testing-library/react";
import { BasicProductImage } from "./product-image.composition";

it("should render with the correct text", () => {
  const { getByText } = render(<BasicProductImage />);
  expect(getByText).toBeTruthy();
});
