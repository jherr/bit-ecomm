import React from "react";

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

export const ProductImage: React.FunctionComponent<ProductImageProps> = ({
  image,
  alt,
}) => {
  return <img src={image} alt={alt} />;
};
