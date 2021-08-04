import React from "react";
import { Form } from "react-bootstrap";
import Button from "./Button";
// import { useRef } from "react";
function Admin() {
  //props
  // const titleInputRef = useRef();
  // const actualamountInputRef = useRef();
  // const imageInputRef = useRef();
  // const discountInputRef = useRef();
  // const descriptionInputRef = useRef();

  // function submitHandler(event){
  // event.preventDefault();
  // const enteredTitle = titleInputRef.current.value;
  // const enteredactualAmount = actualamountInputRef.current.value;
  // const enteredImage = imageInputRef.current.value;
  // const enteredDiscount = discountInputRef.current.value;
  // const enteredDescription = descriptionInputRef.current.value;
  // }
  // const productData = {
  //   title: enteredTitle,
  //   actualamount: enteredactualAmount,
  //   image: enteredImage,
  //   discount: enteredDiscount,
  //   description: enteredDescription,
  // };

  // props.onAddProduct(productData);
  return (
    <center>
      <div>
        <p className="para" style={{ marginBottom: 20, marginTop: 40 }}>
          <strong>Add Your Product!</strong>
        </p>
        <Form style={{ marginTop: 70 }}>
          <Form.Control
            className="mb-3"
            placeholder="Title"
            style={{ width: 270 }}
            // ref={titleInputRef}
            required
            id="title"
          />
          <Form.Control
            className="mb-3"
            placeholder="Actual Amount"
            style={{ width: 270 }}
            // ref={actualamountInputRef}
            required
            id="actualamount"
          />
          <Form.Control
            className="mb-3"
            placeholder="Discount(In %)"
            style={{ width: 270 }}
            // ref={discountInputRef}
            required
            id="discount"
          />
          <Form.Control
            as="textarea"
            rows={2}
            style={{ width: 270 }}
            className="mb-3"
            placeholder="Description"
            // ref={descriptionInputRef}
            required
            id="description"
          />
          <Form.Control
            type="file"
            style={{ width: 270 }}
            className="mb-3"
            placeholder="Image File"
            // ref={imageInputRef}
            required
            id="image"
          />
          <Button type="submit" text="Add"  />

        </Form>
      </div>
    </center>
  );
}

export default Admin;
          //submitHandler={submitHandler}