import React from "react";
import { Card } from "react-bootstrap";
import ButtonProduct from "./ButtonProduct.js";
function Item(props) {
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
          <ButtonProduct text="Add to Cart" />
        </center>
      </Card.Body>
    </Card>
  );
}

export default Item;
