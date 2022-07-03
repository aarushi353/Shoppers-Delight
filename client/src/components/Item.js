import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Card } from "react-bootstrap";
import "../assets/css/index.css"
import { useStateValue } from "../store";

function Item({id, title, image, sellingamount, actualprice, discount, description, details}) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        sellingamount: sellingamount,
        actualprice: actualprice,
        discount: discount,
        description: description,
        details: details
      },
    });
  };
  return (
    <Card
      style={{ width: 250, backgroundColor: "#ffff", color: "#012443", borderRadius: 25 }}
      className="my-3 p-3"
    >
      <LinkContainer to={`/product-info/${id}`} >
      <Card.Img variant="top" src={image} style={{ height: 200 }} />
      </LinkContainer>
      <Card.Body>
      <LinkContainer to={`/product-info/${id}`} >
        <Card.Title> {title} </Card.Title>
        </LinkContainer>
        <Card.Title>
          ₹ {sellingamount} <del>₹{actualprice} </del>
          <br />
          <span style={{ color: "green" }}> {discount}% Off</span>{" "}
        </Card.Title>
        <center>
          <button className="buttonproduct" onClick={addToBasket}>
          Add to cart
          </button>
          
        </center>
      </Card.Body>
    </Card>
  );
}

export default Item;
