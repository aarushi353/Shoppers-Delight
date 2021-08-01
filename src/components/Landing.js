import React from "react";
import "./Landing.css";
import image from "../assets/images/landing.png";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Item from "./Item";
import SearchBar from "./SearchBar.js";
import TopProducts from "./TopProducts.js";
import { Row, Col } from "react-bootstrap";
function LandingPage() {
  return (
    <div className="Landing">
      <SearchBar />
      <div>
        <center>
          <strong>
            <p className="para">
              Your Online Shopping Destination <ShoppingCartIcon />
            </p>
          </strong>
        </center>
        <center>
          <img src={image} alt="img" />
        </center>
      </div>
      <center>
        <p className="para" style={{ fontSize: 50 }}>
          Top Picks
        </p>
      </center>
      <div className="top-products">
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
    </div>
  );
}
export default LandingPage;
