import React from "react";

const ProductContext = React.createContext({
  items: [{ id: "", name: "", desc: "", price: 0.0, qty: 0 }],
  addItem: (item) => {},
  updateItem: (id, increment) => {},
});

export default ProductContext;
