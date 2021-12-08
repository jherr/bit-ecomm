import React, { useContext } from "react";
import { EcommContextContext } from "@jherr/ecomm.ui.ecomm-context";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

export type PdpProductInfoProps = {
  /**
   * a text to be rendered in the component.
   */
  product: Product;

  currency: {
    format: (value: number) => string;
  };

  loggedIn: boolean;

  addToCart: (id: number) => void;
};

export function PdpProductInfo({
  product,
  currency,
  loggedIn,
  addToCart,
}: PdpProductInfoProps) {
  const { AddToCart, ProductImage } = useContext(EcommContextContext);

  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <ProductImage image={product.image} alt={product.name} />
      </div>
      <div>
        <div className="flex">
          <h1 className="font-bold text-3xl flex-grow">{product.name}</h1>
          <div className="font-bold text-3xl flex-end">
            {currency.format(product.price)}
          </div>
        </div>
        {loggedIn && (
          <div className="text-right mt-2">
            <AddToCart
              id={product.id}
              onAddToCart={() => addToCart(product.id)}
            />
          </div>
        )}
        <div className="mt-10">{product.description}</div>
        <div className="mt-10">{product.longDescription}</div>
      </div>
    </div>
  );
}
