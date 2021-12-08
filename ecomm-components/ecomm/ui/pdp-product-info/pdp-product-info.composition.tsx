import React from "react";
import { EcommContextProvider } from "@jherr/ecomm.ui.ecomm-context";

import { PdpProductInfo } from "./pdp-product-info";

export const BasicPdpProductInfo = () => (
  <EcommContextProvider>
    <PdpProductInfo
      product={{
        id: 12,
        name: "Product Name",
        price: 100,
        image: "https://via.placeholder.com/300x300",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        longDescription: "",
      }}
      addToCart={() => {}}
      currency={{
        format: (v) => `$${v}`,
      }}
      loggedIn={true}
    />
  </EcommContextProvider>
);
