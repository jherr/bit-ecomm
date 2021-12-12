import React, { useState } from "react";
import { useMatch } from "react-location";
import { useQuery } from "react-query";
import { Switch } from "@headlessui/react";

import { AddToCart } from "@jherr/ecomm.ui.add-to-cart";
import { RedAddToCart } from "@jherr/ecomm.ui.red-add-to-cart";
import { PdpProductInfo } from "@jherr/ecomm.ui.pdp-product-info";
import { EcommContextProvider } from "@jherr/ecomm.ui.ecomm-context";
import { ProductImage } from "@jherr/ecomm.ui.product-image";

import { currency, getProductById } from "../lib/products";
import { useStore } from "../lib/cart";

export type ProductImageProps = {
  /**
   * image URL
   */
  image: string;

  /**
   * alt text
   */
  alt: string;
};

export const BlueProductImage: React.FunctionComponent<ProductImageProps> = ({
  image,
  alt,
}) => {
  return (
    <img
      className="border-4 rounded-xl border-blue-600 padding-5"
      src={image}
      alt={alt}
    />
  );
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PDPContent() {
  const [customized, setCustomized] = useState(true);
  const { addToCart, jwt } = useStore();
  const { id } = useMatch().params;
  const product = useQuery(["product", id], () => getProductById(id)).data;

  return (
    <div>
      <div className="flex flex-row mb-10">
        <Switch
          checked={customized}
          onChange={setCustomized}
          className={classNames(
            customized ? "bg-indigo-600" : "bg-gray-200",
            "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          )}
        >
          <span className="sr-only">Customized</span>
          <span
            aria-hidden="true"
            className={classNames(
              customized ? "translate-x-5" : "translate-x-0",
              "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
            )}
          />
        </Switch>
        <div className="text-sm ml-2 pt-1">
          {customized ? "Customized" : "Not customized"}
        </div>
      </div>
      <EcommContextProvider
        AddToCart={customized ? RedAddToCart : AddToCart}
        ProductImage={customized ? BlueProductImage : ProductImage}
      >
        <PdpProductInfo
          product={product}
          currency={currency}
          addToCart={addToCart}
          loggedIn={!!jwt}
        />
      </EcommContextProvider>
    </div>
  );
}
