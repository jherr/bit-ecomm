import React from "react";

import { getProductById } from "../lib/products";
import { queryClient } from "../client";

export default {
  loader: async ({ params }) => {
    await queryClient.prefetchQuery(["product", params.id], () =>
      getProductById(params.id)
    );
  },
  element: () => import("./PDPContent").then((module) => <module.default />),
};
