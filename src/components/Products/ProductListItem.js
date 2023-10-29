import React, { useContext } from "react";
import Button from "../UI/Button";
import classes from "./ProductListItem.module.css";
import CartContext from "../../store/cart-context";

const ProductListItem = (props) => {
  const cartCtx = useContext(CartContext);

  const onAddToCart = () => {
    if (props.item.qty > 0) {
      cartCtx.addItem(props.item);
    } else {
      alert("Item out of stock!!!");
    }
  };

  return (
    <li className={classes.li}>
      <div className={classes.info}>
        <div className={classes.name}>{props.item.name}</div>
        <div className={classes.desc}>{props.item.desc}</div>
        <div className={classes.price}>₹{props.item.price.toFixed(2)}</div>
      </div>
      <div className={classes.qty}>Stock:{props.item.qty}</div>
      <div className={classes.actions}>
        <Button button={{ type: "button", onClick: onAddToCart }}>
          Add To Cart
        </Button>
      </div>
    </li>
  );
};

export default ProductListItem;
