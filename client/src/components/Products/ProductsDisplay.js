import React from "react";
import { Row, Col } from "react-bootstrap";
import Item from "./Item";
import "../../assets/css/ProductsDisplay.css";
const ProductsDisplay = ({list}) => {  
  return (
    <div className="product-page">
      <div className="products-section">
        <>
          <Row>
            {list.map((elements) => {
              const {
                id,
                title,
                image,
                category,
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
                    category={category}
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
        </>
      </div>
    </div>
  );
};

export default ProductsDisplay;
