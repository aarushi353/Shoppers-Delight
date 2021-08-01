import React from "react";
import "../components/Landing.css";
import CartItem from "../components/CartItem";
function Cart() {
  return (
    <div>
      <p className="para" style={{ fontSize: 50 }}>
        <center>Cart</center>
      </p>
      <CartItem />
    </div>
  );
}

export default Cart;
