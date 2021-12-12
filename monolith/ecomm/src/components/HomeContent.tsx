import React from "react";
import { Link } from "react-location";
import { useQuery } from "react-query";

import { currency, getProducts, Product } from "../lib/products";
import { useStore } from "../lib/cart";

export default function HomeContent() {
  const { addToCart, jwt } = useStore();
  const query = useQuery<Product[], any>("products", getProducts);

  return (
    <div className="grid grid-cols-4 gap-5">
      {query.data.map((product) => (
        <div key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} />
          </Link>
          <div className="flex">
            <div className="flex-grow font-bold">
              <Link to={`/product/${product.id}`}>{product.name}</Link>
            </div>
            <div className="flex-end">{currency.format(product.price)}</div>
          </div>
          <div className="text-sm mt-4">{product.description}</div>
          {jwt && (
            <div className="text-right mt-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
                onClick={() => addToCart(product.id)}
                id={`addtocart_${product.id}`}
              >
                Add to Cart
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
