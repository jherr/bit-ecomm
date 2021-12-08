import React, { useContext } from "react";
import { EcommContextProvider } from "./ecomm-context-context-provider";
import { EcommContextContext } from "./ecomm-context-context";

export function MockComponent() {
  const { AddToCart } = useContext(EcommContextContext);

  return (
    <div>
      <AddToCart id={123} onAddToCart={(id) => alert(id)} />
    </div>
  );
}

export const BasicProvider = () => {
  return (
    <EcommContextProvider>
      <MockComponent />
    </EcommContextProvider>
  );
};
