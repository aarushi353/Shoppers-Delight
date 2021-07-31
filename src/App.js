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
function App() {
  return (
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
          <Adminpage />
        </Route>
        <Route path="/Users">
          <Adminpage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
