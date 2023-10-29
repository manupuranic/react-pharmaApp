import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button {...props.button} className={classes.btn}>
      {props.children}
    </button>
  );
};

export default Button;
