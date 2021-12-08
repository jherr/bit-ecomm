import React from "react";
import { render } from "@testing-library/react";
import { BasicRedAddToCart } from "./red-add-to-cart.composition";

it("should render with the correct text", () => {
  const { getByText } = render(<BasicRedAddToCart />);
  const rendered = getByText("Add to Cart");
  expect(rendered).toBeTruthy();
});
