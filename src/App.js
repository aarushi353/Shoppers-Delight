import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/LandingPage";
import Search from "./pages/Search";
import Product from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/CheckOut";
import Login from "./pages/Login";
import Adminpage from "./pages/Adminpage";
import Signup from "./pages/SignUp";
import Orders from "./pages/Orders";
import Users from "./pages/Users";
import { useState,createContext, } from "react";

export const CartProduct = createContext();

function App() {

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

  const contextTemplete = {
    cart: CartItems,
    totalItemsInCart: CartItems.length,
    addToCart: addProductHandler,
    removeCart: removeProductHandler,
    itemIsAddedToCart: itemIsAddedToCartHandler,
  };


  return (
    <CartProduct.Provider value={contextTemplete}>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Search">
            <Search />
          </Route>
          <Route path="/Products" exact>
            <Product />
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
          <Route path="/Checkout">
            <Checkout />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Signup">
            <Signup />
          </Route>
          <Route path="/Admin">
            <Adminpage />
          </Route>
          <Route path="/Orders">
            <Orders />
          </Route>
          <Route path="/Users">
            <Users />
          </Route>
        </Switch>
      </div>
    </CartProduct.Provider>
  );
}

export default App;
