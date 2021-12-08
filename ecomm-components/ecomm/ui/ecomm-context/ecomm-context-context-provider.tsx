import React, { ReactNode } from "react";
import { AddToCartProps, AddToCart } from "@jherr/ecomm.ui.add-to-cart";
import { ProductImage, ProductImageProps } from "@jherr/ecomm.ui.product-image";

import { EcommContextContext } from "./ecomm-context-context";

export type EcommContextProviderProps = {
  /**
   * AddToCart component.
   */
  AddToCart?: React.FunctionComponent<AddToCartProps>;

  /**
   * ProductImage component.
   */
  ProductImage?: React.FunctionComponent<ProductImageProps>;

  /**
   * children to be rendered within this theme.
   */
  children: ReactNode;
};

export function EcommContextProvider({
  children,
  ...props
}: EcommContextProviderProps) {
  return (
    <EcommContextContext.Provider value={{ AddToCart, ProductImage, ...props }}>
      {children}
    </EcommContextContext.Provider>
  );
}
