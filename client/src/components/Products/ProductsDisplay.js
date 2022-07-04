import React from "react";
import { Row, Col } from "react-bootstrap";
import Item from "./Item";
import DummyProducts from "./DummyProducts";
import "../../assets/css/ProductsDisplay.css";
const ProductsDisplay = () => {  
  return (
    <div className="product-page">
      <div className="products-section">
        <center>
          <Row>
            {DummyProducts.map((elements) => {
              const {
                id,
                title,
                image,
                description,
                sellingamount,
                actualprice,
                discount,
                details,
              } = elements;
              return (
                <Col key={elements.id} >
                  <Item
                    title={title}
                    image={image}
                    sellingamount={sellingamount}
                    actualprice={actualprice}
                    discount={discount}
                    description={description}
                    id={id}
                    details={details}
                  />
                </Col>
              );
            })}
          </Row>
        </center>
      </div>
    </div>
  );
};

export default ProductsDisplay;
