import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Button } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import image from "../assets/images/landing.png";
import DummyProducts from "./DummyProducts";
import Item from "./Item";
import "../assets/css/Landing.css";

function LandingPage() {
  const [name, setName] = useState("");

  const filteredProduct = DummyProducts.filter((filteredProduct) => {return filteredProduct.discount > 60})
  return (
    <div className="Landing">
      <section className="search">
        <center>
          <form className="searchform">
            <input type="text" placeholder="Search" value={name} />
            <button
              component={Link}
              type="submit"
              variant="contained"
              style={{ height: 50, color: "#dc3545", marginTop: 5 }}
            >
              Search
            </button>
          </form>
        </center>
      </section>
      <div className="intro-section">
        <center>
          <img src={image} alt="img" />
        </center>
        <div>
          <center>
            <p class="intro-para">
              A Few clicks and your market is{" "}
              <span className="spanText">on the way.</span> That's all it takes.{" "}
              <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: "#DC3545", color: "white" }}
                component={Link}
                to="/products"
              >
                Shop Now
                <NavigateNextIcon />
              </Button>
            </p>
          </center>
        </div>
      </div>
      <center>
        <p className="para">Top Picks</p>
      </center>
      <div className="top-products">
        <center>
          <Row>
            {filteredProduct.map((product) => {
              return (
                <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                  <Item
                    title={product.title}
                    image={product.image}
                    sellingamount={product.sellingamount}
                    actualprice={product.actualprice}
                    discount={product.discount}
                    id={product.id}
                  />
                </Col>
              );
            })}
          </Row>
        </center>
      </div>
    </div>
  );
}
export default LandingPage;
