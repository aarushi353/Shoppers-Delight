import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          Landing Page
        </Route>
        <Route path="/Search" exact>
          Search View
        </Route>
        <Route path="/Products" exact>
          Products
        </Route>
        <Route path="/Cart" exact>
          Cart
        </Route>
        <Route path="/Checkout" exact>
          Checkout
        </Route>
        <Route path="/Login" exact>
          Login
        </Route>
        <Route path="/Signup" exact>
          SignUp
        </Route>
        <Route path="/Admin" exact>
          Admin Page
        </Route>
      </Switch>
    </div>
  );
}

export default App;
