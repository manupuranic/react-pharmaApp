import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.nav}>
        <h1>React PharmaApp</h1>
        <HeaderCartButton onClick={props.onClick} />
      </header>
    </Fragment>
  );
};

export default Header;
