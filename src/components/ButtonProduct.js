import React from "react";
import "./ButtonProduct.css";
function ButtonProduct(props) {
  return <button className="buttonproduct" onClick={props.CartStatusHandler}>{props.text}</button>;
}

export default ButtonProduct;
