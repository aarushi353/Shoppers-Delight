import React from "react";
import "../assets/css/Landing.css";
import { useContext } from "react";
import { CartProduct } from "../App";
import Item from "../components/Item";
function Cart() {
  const cartProduct = useContext(CartProduct);
  let content;
  if (cartProduct.totalItemsInCart === 0) {
    content = (
      <center>
        <p style={{ marginTop: 30, color: "#dc3545" }}>
          You got no items in Cart yet. Start adding some?
        </p>
      </center>
    );
  } else {
    content = <Item product={cartProduct.cart} />;
  }
  return (
    <>
      <p className="para">
        <center>Cart</center>
      </p>
      {content}
    </>
  );
}

export default Cart;
