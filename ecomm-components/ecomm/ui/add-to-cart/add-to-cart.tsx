import React from "react";

export type AddToCartProps = {
  /**
   * ID of the product
   */
  id: number;

  /**
   * Called when the customer clicks add to cart
   */
  onAddToCart: (id: number) => void;
};

export const AddToCart: React.FunctionComponent<AddToCartProps> = ({
  id,
  onAddToCart,
}) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
      onClick={() => onAddToCart?.(id)}
    >
      Add to Cart
    </button>
  );
};
