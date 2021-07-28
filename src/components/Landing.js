import React from "react";
import "./Landing.css";
import image from "../assets/images/landing.png";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Item from "./Item";
import SearchBar from "./SearchBar.js";
import TopProducts from './TopProducts.js';
function LandingPage() {
  return (
    <div className="Landing">
      <SearchBar />
      <div>
        <center>
          <strong>
            <p className="para">
              Your Online Shopping Destination <ShoppingCartIcon />
            </p>
          </strong>
        </center>
        <center>
          <img src={image} alt="img" />
        </center>
      </div>
      <center>
        <p className="para" style={{ fontSize: 50 }}>
          Top Picks
        </p>
      </center>
      <div className="top-products">
      {TopProducts.map((product)=>{
           return <Item
           title={product.title}
           image={product.image}
           sellingamount={product.sellingamount}
           actualprice={product.actualprice}
           discount={product.discount}
           description={product.description}
          />})}
      </div>
    </div>
  );
}
export default LandingPage;
