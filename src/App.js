import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/LandingPage";
import Search from "./pages/Search";
import Product from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/CheckOut";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Signup from "./pages/SignUp";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Search" exact>
          <Search />
        </Route>
        <Route path="/Products" exact>
          <Product />
        </Route>
        <Route path="/Cart" exact>
          <Cart />
        </Route>
        <Route path="/Checkout" exact>
          <Checkout />
        </Route>
        <Route path="/Login" exact>
          <Login />
        </Route>
        <Route path="/Signup" exact>
          <Signup />
        </Route>
        <Route path="/Admin" exact>
          <Admin />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
