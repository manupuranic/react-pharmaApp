import { useState } from "react";
import ProductContext from "./product-context";

const ProductProvider = (props) => {
  const [items, setItems] = useState([]);

  const onAddItems = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const onRemoveItem = (id) => {
    let updatedItems = [...items];
    let existingItemIndex = updatedItems.findIndex((item) => item.id === id);
    updatedItems[existingItemIndex].qty -= 1;
  };

  const onIncrementItem = (id) => {
    let updatedItems = [...items];
    let existingItemIndex = updatedItems.findIndex((item) => item.id === id);
    updatedItems[existingItemIndex].qty += 1;
  };

  const productCtx = {
    items: items,
    addItem: onAddItems,
    removeItem: onRemoveItem,
    incrementItem: onIncrementItem,
  };

  return (
    <ProductContext.Provider value={productCtx}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
