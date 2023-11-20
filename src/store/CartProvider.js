import { useCallback, useContext, useState, useEffect } from "react";
import CartContext from "./cart-context";
import ProductContext from "./product-context";

import {
  addProductToCart,
  getCart,
  deleteProductInCart,
  updateProductInCart,
  emptyCart,
} from "../utils/Cart";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const productCtx = useContext(ProductContext);

  const fetchCart = useCallback(async () => {
    const cart = await getCart();
    setItems(cart);
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const onAddItems = async (item) => {
    let existingItemIndex = items.findIndex(
      (prevItem) => prevItem.productId === item._id
    );
    if (existingItemIndex >= 0) {
      const existingItem = items[existingItemIndex];
      existingItem.qty += 1;
      await updateProductInCart(existingItem, true);
    } else {
      const formattedItem = {
        name: item.name,
        productId: item._id,
        desc: item.desc,
        price: item.price,
        qty: 1,
      };
      await addProductToCart(formattedItem);
    }
    productCtx.updateItem(item._id, false);
    await fetchCart();
  };

  const onRemoveItem = async (id) => {
    const toDeleteItemIndex = items.findIndex((item) => item._id === id);
    const existingItem = items[toDeleteItemIndex];
    if (existingItem.qty > 0) {
      existingItem.qty -= 1;
      await updateProductInCart(existingItem, false);
    } else {
      await deleteProductInCart(id);
    }
    productCtx.updateItem(existingItem.productId, true);
    await fetchCart();
  };

  const onClearCart = async () => {
    await emptyCart();
    setItems([]);
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
