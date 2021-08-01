import React from "react";
import { createContext } from "react";
import { useState } from "react";
const CartProduct = createContext({
  cart: [],
  totalItemsInCart: 0,
  addToCart: (addedToCart) => {},
  removeCart: (productId) => {},
  itemIsAddedToCart: (productId) => {},
});

export function CartProductProvider(props) {
  const [CartItems, setCartItems] = useState([]);
  function addProductHandler(addedToCart) {
    setCartItems((prevCartProducts) => {
      return prevCartProducts.concat(addedToCart);
    });
  }
  function removeProductHandler(productId) {
    setCartItems((prevCartProduct) => {
      return prevCartProduct.filter((product) => product.id !== productId);
    });
  }
  function itemIsAddedToCartHandler(productId) {
    return CartItems.some((product) => product.id === productId);
  }

  const context = {
    cart: CartItems,
    totalItemsInCart: CartItems.length,
    addToCart: addProductHandler,
    removeCart: removeProductHandler,
    itemIsAddedToCart: itemIsAddedToCartHandler,
  };

  return (
    <CartProduct.Provider value={context}>
      {props.children}
    </CartProduct.Provider>
  );
}
export default CartProduct;
