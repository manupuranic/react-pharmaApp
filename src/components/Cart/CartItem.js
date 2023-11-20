import { useContext } from "react";
import classes from "./CartItem.module.css";
import CartContext from "../../store/cart-context";

const CartItem = (props) => {
  const price = `₹${props.price.toFixed(2)}`;
  const subTotal = props.qty * props.price;
  const cartCtx = useContext(CartContext);

  const onAdd = () => {
    cartCtx.addItem({
      name: props.name,
      _id: props.productId,
      price: props.price,
    });
  };

  const onRemove = () => {
    cartCtx.removeItem(props.id);
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <div className={classes.qty}>x{props.qty}</div>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
      <div className={classes.subTotal}>₹{subTotal.toFixed(2)}</div>
    </li>
  );
};

export default CartItem;
