import React from "react";
import ProductsDisplay from "../components/Products/ProductsDisplay";
import "../assets/css/ProductsDisplay.css";
import SearchBar from "../components/Products/SearchBar";
import SidePanel from "../components/Products/SidePanel";
function Product() {
  return (
    <div className="products">
      <SearchBar />
      <div className="home_panelList-wrap">
        <div className="home_panel-wrap" >
      <SidePanel />
      </div>
      <div className="home_list-wrap" >
      <ProductsDisplay />
      </div>
      </div>
    </div>
  );
}

export default Product;
