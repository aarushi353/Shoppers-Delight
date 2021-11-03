import React from "react";
import DummyProducts from "../components/DummyProducts";
import "../assets/css/SingleProduct.css";
import {useParams} from 'react-router-dom';

const SingleProductPage = () => {
 const { id } =  useParams();
 const product = DummyProducts.find((product)=>{ return product.id == id})
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
              <span style={{ color: "green" }}>{product.discount} %</span>{" "}</div>
              <div>
              </div>
            </div>
          
        </strong>
      </div>
    </div>
  );
}

export default SingleProductPage;
