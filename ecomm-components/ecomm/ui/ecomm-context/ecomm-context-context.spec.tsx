import React from "react";
import { BasicProvider } from "./ecomm-context-context.composition";
import { render } from "@testing-library/react";

it("should render the button in the color blue", () => {
  const { getByText } = render(<BasicProvider />);
  const rendered = getByText("Add to Cart");
  expect(rendered).toBeTruthy();
});
