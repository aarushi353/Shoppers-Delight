import React from "react";
import { Form } from "react-bootstrap";
import "../assets/css/Buttons.css";
function Adminpage() {
  return (
    <>
      <center>
        <>
          <p className="para">
            <strong>Add Your Product!</strong>
          </p>
          <Form style={{ marginTop: 50, marginBottom: 30 }}>
            <Form.Control
              className="mb-3"
              placeholder="Title"
              style={{ width: 270 }}
              required
              id="title"
            />
            <Form.Control
              className="mb-3"
              placeholder="Actual Amount"
              style={{ width: 270 }}
              required
              id="actualamount"
            />
            <Form.Control
              className="mb-3"
              placeholder="Discount(In %)"
              style={{ width: 270 }}
              required
              id="discount"
            />
            <Form.Control
              as="textarea"
              rows={2}
              style={{ width: 270 }}
              className="mb-3"
              placeholder="Description"
              required
              id="description"
            />
            <Form.Control
              type="file"
              style={{ width: 270 }}
              className="mb-3"
              placeholder="Image File"
              required
              id="image"
            />
            <button type="submit" className="button">
              Add Product
            </button>
          </Form>
        </>
      </center>
    </>
  );
}

export default Adminpage;
