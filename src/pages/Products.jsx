import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  let params = useParams();

  return <div className="py-5">Product name is {params.product}</div>;
};

export default Product;
