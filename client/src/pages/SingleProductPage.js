import React from "react";
import DummyProducts from "../components/DummyProducts";
import "../assets/css/SingleProduct.css";
import {useParams} from 'react-router-dom';
import ButtonProduct from "../components/ButtonProduct";
import { useContext } from "react";
import { CartProduct } from "../App";


const SingleProductPage = (props) => {
  const cartProduct = useContext(CartProduct);
  const itemIsAddedToCart = cartProduct.itemIsAddedToCart(props.id);
  function CartStatusHandler() {
    if (itemIsAddedToCart) {
      cartProduct.removeCart(props.id);
    } else {
      cartProduct.addToCart({
        id: props.id,
        title: props.title,
        sellingamount: props.sellingamount,
        actualamount: props.actualamount,
        image: props.image,
        discount: props.discount,
        details: props.details,
      });
    }
  }
 const { id } =  useParams();
 const product = DummyProducts.find((product)=>{ return product.id == id})
  return (
    <div className="product-info">
      <center><div className="image">
        <img src={product.image} style={{width: "27%", marginTop: "2%"}} />
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
              <ButtonProduct
                CartStatusHandler={CartStatusHandler}
                text={itemIsAddedToCart ? "Remove from Cart" : "Add to Cart"} 
              />
              </div>
            </div>
        </strong>
      </div>
      </center>
    </div>
  );
}

export default SingleProductPage;
