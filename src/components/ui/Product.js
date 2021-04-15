import React from "react";

export const Product = ({ product }) => {
  return (
    <div className='product p-4' >
      <h4>{product.title}</h4>
          <img src={product.pic} alt={product.title} />
          <br/>
          <a href='/' className=' ml-3'>Shop now</a>  
    </div>
  );
};
