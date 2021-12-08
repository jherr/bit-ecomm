import React from "react";
import { AddToCartProps } from "@jherr/ecomm.ui.add-to-cart";

export const RedAddToCart: React.FunctionComponent<AddToCartProps> = ({
  id,
  onAddToCart,
}) => {
  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white text-sm font-bold py-2 px-4 rounded"
      onClick={() => onAddToCart?.(id)}
    >
      Add to Cart
    </button>
  );
};
