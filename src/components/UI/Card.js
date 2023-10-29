import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const custom = classes.card + " " + props.className;
  return <div className={custom}>{props.children}</div>;
};

export default Card;
