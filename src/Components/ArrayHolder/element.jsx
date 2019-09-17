import React from "react";
import classes from "../ArrayHolder/element.module.css";
const element = props => {
  return <div className={classes.Element}>{props.value}</div>;
};

export default element;
