import React from "react";
import Element from "../ArrayHolder/element";
import classes from "../ArrayHolder/arrayHolder.module.css";
const arrayHolder = props => {
  return (
    <div className={classes.ArrayContainer}>
      {props.elements.map(ele => (
        <Element value={ele} />
      ))}
    </div>
  );
};

export default arrayHolder;
