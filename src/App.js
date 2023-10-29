import { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Product from "./components/Products/Product";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import ProductProvider from "./store/ProductProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const onToggleCart = () => {
    setShowCart((prevState) => !prevState);
  };

  return (
    <ProductProvider>
      <CartProvider>
        {showCart && <Cart onClick={onToggleCart} />}
        <Header onClick={onToggleCart} />
        <Product />
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
