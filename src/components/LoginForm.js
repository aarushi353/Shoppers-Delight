import React from "react";
import Button from "../components/Button";
import { Form } from "react-bootstrap";
function LoginForm() {
  return (
    <center><div className="Login">
      <Form style={{marginTop:120}}>
        <Form.Group  controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" style={{width:270}} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" style={{width:270}} />
        </Form.Group>
        <Button type="submit" text="Login" />

      </Form>
    </div></center>
  );
}
export default LoginForm;
