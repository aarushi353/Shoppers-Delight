import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import DummyProducts from "./DummyProducts";
import Item from "./Item";
import "../assets/css/Landing.css";
import About from "./About";
function LandingPage() {
  const [name, setName] = useState("");

  const filteredProduct = DummyProducts.filter((filteredProduct) => {
    return filteredProduct.discount > 60;
  });
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
      <About />
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
