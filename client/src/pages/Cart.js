import React from "react";
import "../components/Landing.css";
import { useContext } from "react";
import { CartProduct } from "../App";
import Item from "../components/Item";
function Cart() {
  const cartProduct = useContext(CartProduct);
  let content;
  if (cartProduct.totalItemsInCart === 0) {
    content = (
      <center>
        <p style={{ color: "white", marginTop: 30 }}>
          You got no items in Cart yet. Start adding some?
        </p>
      </center>
    );
  } else {
    content = <Item product={cartProduct.cart} />;
  }
  return (
    <div>
      <p className="para" style={{ fontSize: 50 }}>
        <center>Cart</center>
      </p>
      {content}
    </div>
  );
}

export default Cart;
