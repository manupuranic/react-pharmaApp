import React, { useContext, useReducer } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./NewProduct.module.css";
import ProductContext from "../../store/product-context";

const formReducer = (state, action) => {
  switch (action.type) {
    case "NAME_CHANGE":
      return { ...state, name: action.val };
    case "DESC_CHANGE":
      return { ...state, desc: action.val };
    case "PRICE_CHANGE":
      return { ...state, price: action.val };
    case "QTY_CHANGE":
      return { ...state, qty: action.val };
    default:
      return {
        name: "",
        desc: "",
        price: "",
        qty: "",
      };
  }
};

const NewProduct = () => {
  const [formState, dispatchForm] = useReducer(formReducer, {
    name: "",
    desc: "",
    price: "",
    qty: "",
  });

  const productCtx = useContext(ProductContext);

  const onNameChange = (e) => {
    dispatchForm({ type: "NAME_CHANGE", val: e.target.value });
  };
  const onDescChange = (e) => {
    dispatchForm({ type: "DESC_CHANGE", val: e.target.value });
  };
  const onPriceChange = (e) => {
    dispatchForm({ type: "PRICE_CHANGE", val: e.target.value });
  };
  const onQtyChange = (e) => {
    dispatchForm({ type: "QTY_CHANGE", val: e.target.value });
  };
  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    productCtx.addItem({
      ...formState,
      price: +formState.price,
      qty: +formState.qty,
    });
    dispatchForm({ type: "CLEAR" });
  };

  return (
    <Card className={classes["form-div"]}>
      <form className={classes.form} onSubmit={onFormSubmitHandler}>
        <Input
          label="Medicine Name:"
          input={{
            type: "text",
            id: "name",
            value: formState.name,
            onChange: onNameChange,
          }}
        />
        <Input
          label="Description:"
          input={{
            type: "text",
            id: "desc",
            value: formState.desc,
            onChange: onDescChange,
          }}
        />
        <Input
          label="Price:"
          input={{
            type: "number",
            id: "price",
            min: "1",
            step: "0.01",
            value: formState.price,
            onChange: onPriceChange,
          }}
        />
        <Input
          label="Quantity:"
          input={{
            type: "number",
            id: "large",
            min: "1",
            step: "1",
            value: formState.qty,
            onChange: onQtyChange,
          }}
        />
        <Button button={{ type: "submit" }}>Add Product</Button>
      </form>
    </Card>
  );
};

export default NewProduct;
