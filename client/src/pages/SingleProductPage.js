import React from "react";
import TopProducts from "../components/TopProducts";
import ButtonProduct from "../components/ButtonProduct";
import "../assets/css/SingleProduct.css";


const SingleProductPage = ({ match }) => {
 const product = TopProducts.find((p) => p.id === match.params.id);
 
  return (
    <div className="product-info">
      <div className="image">
        <center><img src={product.image} /></center>
      </div>
      <div className="info">
        <h1><div className="underline--magical">
          <strong>{product.title}</strong>
          </div>
        </h1>
        <p className="description">
          {product.description}
        </p>
        <br />
        <strong>
        <div className="order">
          <div>
          {product.sellingamount} <del>{product.actualprice}</del>
            
              {" "}
              <span style={{ color: "green" }}>{product.discount}</span>{" "}</div>
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
