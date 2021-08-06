import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import image from "../assets/images/landing.png";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Item from "./Item";
import "./Searchbar.css";
import TopProducts from "./TopProducts.js";
import "./Landing.css";
import { Button } from "@material-ui/core";
function LandingPage() {
  return (
    <div className="Landing">
      <section className="search">
        <center>
          <form className="searchform">
            <input type="email" placeholder="Search" />
            <Button component={Link} type="submit" variant="contained" color="primary" to="/Search" style={{height: 60}}>
              Search
            </Button>
          </form>
        </center>
      </section>
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
        <center>
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
        </center>
      </div>
    </div>
  );
}
export default LandingPage;
