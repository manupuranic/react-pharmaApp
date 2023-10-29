import React, { useContext } from "react";
import Card from "../UI/Card";
import ProductContext from "../../store/product-context";
import ProductListItem from "./ProductListItem";

const ProductList = () => {
  const productCtx = useContext(ProductContext);
  let productList;
  if (productCtx.items.length) {
    productList = productCtx.items.map((item) => (
      <ProductListItem key={item.id} item={item} />
    ));
  } else {
    productList = <h3>No product found</h3>;
  }
  return (
    <Card>
      <ul>{productList}</ul>
    </Card>
  );
};

export default ProductList;
