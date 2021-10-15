import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Item from "../components/Item";
import "../assets/css/ProductsDisplay.css";
import "../assets/css/Landing.css";
import DummyProducts from "../components/DummyProducts";

function Search() {
  const [items, setItems] = useState(DummyProducts);

  const filterItem = (categoryWiseItem) => {
    const updatedItems = DummyProducts.filter((currentElement) => {
      return currentElement.category === categoryWiseItem;
    });

    setItems(updatedItems);
  };
  return (
    <div style={{ marginTop: 50 }}>
      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          <button className="btn btn-danger" onClick={() => filterItem("Men")}>
            Men
          </button>
          <button
            className="btn btn-danger"
            onClick={() => filterItem("Women")}
          >
            Women
          </button>
          <button
            className="btn btn-danger"
            onClick={() => filterItem("Accessories")}
          >
            Accessories
          </button>
          <button
            className="btn btn-danger"
            onClick={() => filterItem("Electronics")}
          >
            Electronics
          </button>
          <button
            className="btn btn-danger"
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
              return (
                <Col key={elements.id} sm={12} md={6} lg={4} xl={3}>
                  <Item
                    title={title}
                    image={image}
                    sellingamount={sellingamount}
                    actualprice={actualprice}
                    discount={discount}
                    description={description}
                    id={id}
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

export default Search;
