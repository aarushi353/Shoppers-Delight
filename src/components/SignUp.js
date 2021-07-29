import React from "react";
import Button from "./Button";
import { Form } from "react-bootstrap";
import "./SignUp.css";
function SignUp() {
  return (
    <center>

      <div className="Signup">
      <p className="para" style={{marginBottom: 20,marginTop: 40}}>
        <strong> Sign Up</strong>
      </p>
        <Form style={{ marginTop: 70 }}>
          <Form.Control
            className="mb-3"
            placeholder="First name"
            style={{ width: 270 }}
          />
          <Form.Control
            className="mb-3"
            placeholder="Last name"
            style={{ width: 270 }}
          />
          <Form.Control
            className="mb-3"
            controlId="formBasicEmail"
            type="email"
            placeholder="Enter email"
            style={{ width: 270 }}
          />
          <Form.Control
            className="mb-3"
            controlId="formBasicPassword"
            type="password"
            placeholder="Password"
            style={{ width: 270 }}
          />
          <Button type="submit" text="SignUp" />
        </Form>
      </div>
    </center>
  );
}
export default SignUp;
