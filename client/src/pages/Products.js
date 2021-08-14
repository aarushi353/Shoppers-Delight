import React from "react";
import ProductsDisplay from "../components/ProductsDisplay";
import "../components/Landing.css";
function Product() {
  return (
    <div className="products_dummy">
      <p className="para" style={{ fontSize: 50,marginBottom: 50 }}>
        <center>Products</center>
      </p>
      <ProductsDisplay />
    </div>
  );
}

export default Product;
