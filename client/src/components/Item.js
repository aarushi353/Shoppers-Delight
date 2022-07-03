import React from "react";
import { LinkContainer } from "react-router-bootstrap";
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
        image: props.image,
        discount: props.discount,
      });
    }
  }
  return (
    <Card
      style={{ width: 250, backgroundColor: "#ffff", color: "#012443", borderRadius: 25 }}
      className="my-3 p-3"
    >
      <LinkContainer to={`/product-info/${props.id}`} >
      <Card.Img variant="top" src={props.image} style={{ height: 200 }} />
      </LinkContainer>
      <Card.Body>
      <LinkContainer to={`/product-info/${props.id}`} >
        <Card.Title> {props.title} </Card.Title>
        </LinkContainer>
        <Card.Title>
          ₹ {props.sellingamount} <del>₹{props.actualprice} </del>
          <br />
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
