import { BrowserRouter as  Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/LandingPage";
import Product from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Adminpage from "./pages/Adminpage";
import Signup from "./pages/SignUp";
import Orders from "./pages/Orders";
import Users from "./pages/Users";
import Checkout from "./pages/Checkout";
import SingleProductPage from "./pages/SingleProductPage";
import "./assets/css/App.css";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <div className="App">
        <Router>
        <Header />    
          <Switch>
            <Route exact path="/">
              <Home />
             </Route>
            <Route path="/products" exact>
              <Product />
            </Route>
            <Route path="/cart" exact>
              <Cart />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/signup" exact>
              <Signup />
            </Route>
            <Route path="/admin" exact>
              <Adminpage />
            </Route>
            <Route path="/admin/orders" exact>
              <Orders />
            </Route>
            <Route path="/admin/users" exact>
              <Users />
            </Route>
            <Route path="/checkout" exact>
              <Checkout />
            </Route>
            <Route path="/product-info/:id" exact>
              <SingleProductPage />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
            </Switch>
        </Router>
      </div>
    </>
  );
}
export default App;
