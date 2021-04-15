import React from "react";
import { Button } from "reactstrap";
import { NWC } from "../utilies/format";

export const Product = ({ product }) => {
  return (
    <div className="product p-4">
      <h4>{product.title}</h4>
      <img src={product.pic} alt={product.title} />
      <br />
      <div>
        {" "}
        <h6 className="m-3">NGN {NWC(product.price)}</h6>
        <Button color="primary">Add to Cart</Button>
      </div>
    </div>
  );
};
