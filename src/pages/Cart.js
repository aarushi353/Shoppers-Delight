import React from "react";
import "../components/Landing.css";
import { useContext } from "react";
import {CartProduct} from "../App";
import Item from "../components/Item";
import {Col,Row} from "react-bootstrap";
import TopProducts from "../components/TopProducts";
function Cart() {

  const cartProduct = useContext(CartProduct);
  let content;
  if (cartProduct.totalItemsInCart === 0) {
    content = <center><p style={{color:"white",marginTop:30}}>You got no items in Cart yet. Start adding some?</p></center>;
  } else {
    content = <Item product={cartProduct.cart} />;
  }
  return (
    <div>
      <p className="para" style={{ fontSize: 50 }}>
        <center>Cart</center></p>
        {content}
        <Row>
          {TopProducts.map((product) => {
            return (
              <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                <Item
                  title={product.title}
                  image={product.image}
                  sellingamount={product.sellingamount}
                  actualprice={product.actualprice}
                  discount={product.discount}
                  description={product.description}
                  id={product.id}
                />
              </Col>
            );
          })}
        </Row>
    </div>
  )
}

export default Cart;
