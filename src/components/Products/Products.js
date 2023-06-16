import React from "react";
import Skeleton from "../Skeleton/Skeleton";
import "./Products.css";
import ProductWrapper from "../product wrapper/Productwrapper";
import { PRODUCTS } from "../../static";




function Products() {
  return (
    <div className="container">
      <ProductWrapper data={PRODUCTS}/>
      <h2>Products</h2>
      <Skeleton/>
    </div>
  );
}

export default Products;
