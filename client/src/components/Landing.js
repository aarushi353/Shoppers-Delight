import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Button } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import image from "../assets/images/landing.png";
import TopProducts from "./TopProducts";
import Item from "./Item";
import "./Landing.css";

function LandingPage() {
  return (
    <div className="Landing">
      <section className="search">
        <center>
          <form className="searchform">
            <input
              type="text"
              placeholder="Search"
            />
            <Button
              component={Link}
              type="submit"
              variant="contained"
              to="/Search"
              style={{ height: 50, color: "#dc3545", marginTop: 5 }}
            >
              Search
            </Button>
          </form>
        </center>
      </section>
      <div className="intro-section">
        <center><img src={image} alt="img" /></center>
        <div>
          <center>
            <p
              class="intro-para"
            >
              A Few clicks and your market is{" "}
              <span style={{ color: "#FFB830" }}>on the way.</span> That's all
              it takes.{" "}
              <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: "#DC3545", color: "white" }}
                component={Link}
                to="/products"
              >
                Explore more
                <NavigateNextIcon />
              </Button>
            </p>
          </center>
        </div>
      </div>
      <center>
        <p className="para" style={{ fontSize: 50, color: "#dc3545" }}>
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
