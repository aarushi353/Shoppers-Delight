import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Item from "../components/Item";
import "../components/ProductsDisplay_Style.css";
import "../components/Landing.css";
import DummyProducts from "../components/Dummy_Products";
function Search() {
  const [productList, setProductsList] = useState("");
  const [items, setItems] = useState(DummyProducts);
  const filter = (event) => {
    setProductsList(event.target.value);
  };
  const filterItem = (categoryWiseItem) => {
    const updatedItems = DummyProducts.filter((setProductsList) => {
      return setProductsList.category === categoryWiseItem;
    });
    setItems(updatedItems);
  };
  return (
    <div className="search-page">
      <section className="search">
        <center>
          <form className="searchform">
            <input type="text" placeholder="Search" onChange={filter} />
            <button
              type="submit"
              variant="contained"
              color="primary"
              style={{ height: 60, backgroundColor: "#5455d7" }}
              onClick={() => filterItem()}
            >
              Search
            </button>
          </form>
        </center>
      </section>
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
