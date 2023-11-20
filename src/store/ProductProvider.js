import { useCallback, useEffect, useState } from "react";
import ProductContext from "./product-context";

import { addProduct, getProducts, updateProduct } from "../utils/Product";

const ProductProvider = (props) => {
  const [items, setItems] = useState([]);

  const fetchProducts = useCallback(async () => {
    const products = await getProducts();
    setItems(products);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const onAddItems = async (item) => {
    await addProduct(item);
    fetchProducts();
  };

  const onUpdateItem = async (id, increment) => {
    const existingItemIndex = items.findIndex((item) => item._id === id);
    const existingItem = items[existingItemIndex];
    if (increment) {
      existingItem.qty += 1;
    } else {
      existingItem.qty -= 1;
    }
    await updateProduct(existingItem);
    fetchProducts();
  };

  const productCtx = {
    items: items,
    addItem: onAddItems,
    updateItem: onUpdateItem,
  };

  return (
    <ProductContext.Provider value={productCtx}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
