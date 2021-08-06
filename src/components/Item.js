import React from "react";
import { Card } from "react-bootstrap";
import { useContext } from "react";
import { CartProduct } from "../App";
import ButtonProduct from "./ButtonProduct.js";
function Item(props) {
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
        description: props.description,
        image: props.image,
        discount: props.discount,
      });
    }
  }
  return (
    <Card style={{ width: 250 }} className="my-3 p-3">
      <Card.Img variant="top" src={props.image} style={{height: 230}} />
      <Card.Body>
        <Card.Title> {props.title} </Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Title>
          ₹ {props.sellingamount} <del>₹{props.actualprice} </del>{" "}
          <span style={{ color: "green" }}> {props.discount}% Off</span>{" "}
        </Card.Title>
        <center>
          <ButtonProduct
            CartStatusHandler={CartStatusHandler}
            text={itemIsAddedToCart ? "Remove from Cart" : "Add to Cart"}
          />
        </center>
      </Card.Body>
    </Card>
  );
}

export default Item;
