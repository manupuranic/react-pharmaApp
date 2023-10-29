import React, { Fragment } from "react";
import ProductList from "./ProductList";
import NewProduct from "./NewProduct";

const Product = () => {
  return (
    <Fragment>
      <NewProduct />
      <ProductList />
    </Fragment>
  );
};

export default Product;
