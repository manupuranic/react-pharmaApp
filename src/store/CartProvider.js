import { useContext, useState } from "react";
import CartContext from "./cart-context";
import ProductContext from "./product-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const productCtx = useContext(ProductContext);

  const onAddItems = (item, size) => {
    let existingItemIndex = items.findIndex(
      (prevItem) => prevItem.id === item.id
    );
    let updatedItems;
    if (existingItemIndex >= 0) {
      updatedItems = [...items];
      updatedItems[existingItemIndex].qty += 1;
    } else {
      const formattedItem = {
        name: item.name,
        id: item.id,
        price: item.price,
        qty: 1,
      };
      updatedItems = [...items, formattedItem];
    }
    setItems(updatedItems);
    productCtx.removeItem(item.id);
  };

  const onRemoveItem = (id) => {
    const toDeleteItemIndex = items.findIndex((item) => item.id === id);
    let updatedItems;
    if (items[toDeleteItemIndex].qty > 0) {
      updatedItems = [...items];
      updatedItems[toDeleteItemIndex].qty -= 1;
    } else {
      updatedItems = items.filter((item) => item.id !== id);
    }
    setItems(updatedItems);
    productCtx.incrementItem(id);
  };

  const onClearCart = () => {
    setItems((prevItems) => []);
  };

  const cartCtx = {
    items: items,
    addItem: onAddItems,
    removeItem: onRemoveItem,
    clearCart: onClearCart,
  };

  return (
    <CartContext.Provider value={cartCtx}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
