import { createContext } from "react";

import { AddToCart, AddToCartProps } from "@jherr/ecomm.ui.add-to-cart";
import { ProductImage, ProductImageProps } from "@jherr/ecomm.ui.product-image";

export type EcommContextContextType = {
  /**
   * AddToCart component.
   */
  AddToCart: React.FunctionComponent<AddToCartProps>;
  /**
   * ProductImage component.
   */
  ProductImage: React.FunctionComponent<ProductImageProps>;
};

export const EcommContextContext = createContext<EcommContextContextType>({
  AddToCart,
  ProductImage,
});
