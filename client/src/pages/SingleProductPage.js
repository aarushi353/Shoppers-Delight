import React from "react";
import ButtonProduct from "../components/ButtonProduct";
import "../assets/css/SingleProduct.css";
function SingleProductPage() {

  return (
    <div className="product-info">
      <div className="image">
        <center><img src="" alt="" /></center>
      </div>
      <div className="info">
        <h1><div className="underline--magical">
          <strong>Title</strong>
          </div>
        </h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident
        </p>
        <br />
        <strong>
        <div className="order">
          <div>
            ₹ 6969 <del>₹ 8000 </del>
            
              {" "}
              <span style={{ color: "green" }}>23% Off</span>{" "}</div>
              <div>
                  
              <ButtonProduct
                text="Add to Cart"
              />
              </div>
            </div>
          
        </strong>
      </div>
    </div>
  );
}

export default SingleProductPage;
