import React from "react";
import { render } from "@testing-library/react";
import { BasicPdpProductInfo } from "./pdp-product-info.composition";

it("should render with the correct text", () => {
  const { getByText } = render(<BasicPdpProductInfo />);
  const rendered = getByText("Product Name");
  expect(rendered).toBeTruthy();
});
