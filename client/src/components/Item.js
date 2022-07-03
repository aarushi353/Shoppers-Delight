import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Card } from "react-bootstrap";
import "../assets/css/index.css"
function Item(props) {

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
          <button className="buttonproduct">
          Add to cart
          </button>
          
        </center>
      </Card.Body>
    </Card>
  );
}

export default Item;
