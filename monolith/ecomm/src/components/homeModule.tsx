import React from "react";
import { getProducts } from "../lib/products";
import { queryClient } from "../client";

import HomeContent from "./HomeContent";

export default {
  loader: async () =>
    queryClient.getQueryData("products") ??
    queryClient.fetchQuery("products", getProducts).then(() => ({})),
  element: <HomeContent />,
};
