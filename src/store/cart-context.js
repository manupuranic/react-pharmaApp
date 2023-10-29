import React from "react";

const CartContext = React.createContext({
  items: [{ id: "", name: "", price: 0.0, qty: 0 }],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
