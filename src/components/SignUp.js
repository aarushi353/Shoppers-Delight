import React from "react";
import Button from "./Button";
import { Form } from "react-bootstrap";
function SignUp() {
  return (
    <center><div className="Signup">
      <Form style={{marginTop:120}}>
      <Form.Control className="mb-3" placeholder="First name" style={{width:270}} />
      <Form.Control className="mb-3" placeholder="Last name" style={{width:270}} />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" style={{width:270}} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" style={{width:270}} />
        </Form.Group>
        <Button type="submit" text="SignUp" />

      </Form>
    </div></center>
  );
}
export default SignUp;
