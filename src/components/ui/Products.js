import React from "react";
import { useSelector } from "react-redux";
import { Product } from "./Product";
export const Products = () => {

  const soko = useSelector(state => state.soko)

  return (
    <div className="products-Container">
      {soko.map((product) => (
        <Product 
        product={product}
        key={product.id}
        />
        ))}
    </div>
  );

};
