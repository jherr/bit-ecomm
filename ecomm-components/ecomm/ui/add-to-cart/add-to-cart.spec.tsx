import React from "react";
import { render } from "@testing-library/react";
import { BasicAddToCart } from "./add-to-cart.composition";

it("should render with the correct text", () => {
  const { getByText } = render(<BasicAddToCart />);
  const rendered = getByText("Add to Cart");
  expect(rendered).toBeTruthy();
});
