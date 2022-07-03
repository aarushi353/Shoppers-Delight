import React from "react";
import DummyProducts from "../components/DummyProducts";
import "../assets/css/SingleProduct.css";
import "../assets/css/index.css";
import {useParams} from 'react-router-dom';


const SingleProductPage = (props) => {
 
 const { id } =  useParams();
 const product = DummyProducts.find((product)=>{ return product.id === id})
  return (
    <div className="product-info">
      <center><div className="image">
        <img src={product.image} style={{width: "27%", marginTop: "2%"}} alt="pic" />
      </div></center>
      <center><div className="info">
        <h1><div className="spa">
          <strong><u className="underline" style={{textDecorationColor: "#fa6776"}}>{product.title}</u></strong>
          </div>
        </h1>
        <center><p className="description">
          {product.description}
        </p></center>
        <p className="details-p">{product.details}</p>
        <strong>
        <div className="order">
          <div>
          {product.sellingamount} <del>{product.actualprice}</del>
              {" "}
              <span style={{ color: "green" }}>{product.discount} %</span>{" "}</div>
              <div style={{marginBottom:20}}>
              <button className="buttonproduct"> Add to cart </button>
              </div>
            </div>
        </strong>
      </div>
      </center>
    </div>
  );
}

export default SingleProductPage;
