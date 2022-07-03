import React, { useRef, useState } from "react";
import { Row, Col } from "react-bootstrap";
import DummyProducts from "./DummyProducts";
import Item from "./Item";
import "../assets/css/Landing.css";
import About from "./About";
import Testimonial from "./PastCustomers";

function LandingPage() {

  const valueInputRef = useRef();
  const [value, setValue] = useState("");

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(value);
    const enteredValue = valueInputRef.current.value;
    console.log(enteredValue);
    setValue("");
  };

  const filteredProduct = DummyProducts.filter((filteredProduct) => {
    return filteredProduct.discount > 56;
  });
  
  return (
    <div className="Landing">
      <section className="search">
        <center>
          <form className="searchform">
            <label
              htmlFor="text"
              onChange={valueChangeHandler}
              value={value}
            ></label>
            <input ref={valueInputRef} type="text" placeholder="Search" />
            <button
              onClick={formSubmitHandler}
              variant="contained"
              style={{ height: 50, color: "#dc3545", marginTop: 5 }}
            >
              Search
            </button>
          </form>
        </center>
      </section>
      <About />
      <Testimonial />
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
