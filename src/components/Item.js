import React from "react";
import { Card } from "react-bootstrap";
import Button from "./Button.js";
function Item(props) {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title> {props.title} </Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Title>
          ₹ {props.sellingamount} <del>₹{props.actualprice} </del>{" "}
          <span style={{ color: "green" }}> {props.discount} % Off</span>{" "}
        </Card.Title>
        <center>
          <Button>Add to Cart</Button>
        </center>
      </Card.Body>
    </Card>
  );
}

export default Item;
