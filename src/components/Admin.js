import React from "react";
import { Form } from "react-bootstrap";
import Button from "./Button";
function Admin() {
  return (
    <center>
      <div>
        <p className="para" style={{ marginBottom: 20, marginTop: 40 }}>
          <strong>Add Your Product!</strong>
        </p>
        <Form style={{ marginTop: 70 }}>
          <Form.Control
            className="mb-3"
            placeholder="Name"
            style={{ width: 270 }}
          />
          <Form.Control
            className="mb-3"
            placeholder="Actual Amount"
            style={{ width: 270 }}
          />
          <Form.Control
            className="mb-3"
            placeholder="Discount(In %)"
            style={{ width: 270 }}
          />
          <Form.Control
            as="textarea"
            rows={2}
            style={{ width: 270 }}
            className="mb-3"
            placeholder="Description"
          />
          <Form.Control
            type="file"
            style={{ width: 270 }}
            className="mb-3"
            placeholder="Image File"
          />
          <Button type="submit" text="Add" />
        </Form>
      </div>
    </center>
  );
}

export default Admin;
