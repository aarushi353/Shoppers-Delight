import React from "react";
import { Card } from "react-bootstrap";
import ButtonProduct from "./ButtonProduct.js";
import { useContext } from "react";
import {CartProduct} from "../App";
function Item(props) {
  const cartProduct = useContext(CartProduct);
  console.log(props.id)
  const itemIsAddedToCart = cartProduct.itemIsAddedToCart(props.id);
  function CartStatusHandler() {
    if (itemIsAddedToCart) {
      console.log("remove")
      cartProduct.removeCart(props.id);
    } else {
      console.log("add")
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
    <Card style={{ width: 300 }} className="my-3 p-3">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title> {props.title} </Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Title>
          ₹ {props.sellingamount} <del>₹{props.actualprice} </del>{" "}
          <span style={{ color: "green" }}> {props.discount} % Off</span>{" "}
        </Card.Title>
        <center>
          <button
            onClick={CartStatusHandler}
            text={itemIsAddedToCart ? "Remove from Cart" : "Add to Cart"}
          >
            add to cart
          </button>

        </center>
      </Card.Body>
    </Card>
  );
}

export default Item;
