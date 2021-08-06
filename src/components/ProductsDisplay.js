import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useContext } from "react";
import { CartProduct } from "../App";
import DummyProducts from "./Dummy_Products";
import ButtonProduct from "./ButtonProduct.js";
import "./ProductsDisplay_Style.css";

const ProductsDisplay = () => {
  const [items, setItems] = useState(DummyProducts);

  const filterItem = (categoryWiseItem) => {
    const updatedItems = DummyProducts.filter((currentElement) => {
      return currentElement.category === categoryWiseItem;
    });

    setItems(updatedItems);
  };
  const cartProduct = useContext(CartProduct);
  const itemIsAddedToCart = cartProduct.itemIsAddedToCart(DummyProducts.id);
  return (
    <>
      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          <button className="btn btn-primary" onClick={() => filterItem("Men")}>
            Men
          </button>
          <button
            className="btn btn-primary"
            onClick={() => filterItem("Women")}
          >
            Women
          </button>
          <button
            className="btn btn-primary"
            onClick={() => filterItem("Accessories")}
          >
            Accessories
          </button>
          <button
            className="btn btn-primary"
            onClick={() => filterItem("Electronics")}
          >
            Electronics
          </button>
          <button
            className="btn btn-primary"
            onClick={() => filterItem("Home & Decor")}
          >
            Home & Decor
          </button>
        </div>
      </div>
      <div className="products-section">
        <center>
          <Row>
            {items.map((elements) => {
              const {
                id,
                title,
                image,
                description,
                sellingamount,
                actualprice,
                discount,
              } = elements;

              function CartStatusHandler() {
                if (itemIsAddedToCart) {
                  cartProduct.removeCart(DummyProducts.id);
                } else {
                  cartProduct.addToCart({
                    id: DummyProducts.id,
                    title: DummyProducts.title,
                    sellingamount: DummyProducts.sellingamount,
                    actualamount: DummyProducts.actualamount,
                    description: DummyProducts.description,
                    image: DummyProducts.image,
                    discount: DummyProducts.discount,
                  });
                }
              }
              return (
                <Col key={elements.id} sm={12} md={6} lg={4} xl={3}>
                  <Card style={{ width: 250 }} className="my-3 p-3">
                    <Card.Img
                      variant="top"
                      src={image}
                      style={{ height: 230 }}
                    />
                    <Card.Body>
                      <Card.Title> {title} </Card.Title>
                      <Card.Text>{description}</Card.Text>
                      <Card.Title>
                        ₹ {sellingamount} <del>₹{actualprice} </del> <br />
                        <span style={{ color: "green" }}>
                          {" "}
                          {discount}% Off
                        </span>{" "}
                      </Card.Title>
                      <center>
                        <ButtonProduct
                          CartStatusHandler={CartStatusHandler}
                          text={
                            itemIsAddedToCart
                              ? "Remove from Cart"
                              : "Add to Cart"
                          }
                        />
                      </center>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </center>
      </div>
    </>
  );
};

export default ProductsDisplay;
