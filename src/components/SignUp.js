import React from "react";
import { Link } from "react-router-dom";
import "./Buttons.css";
import { Form } from "react-bootstrap";
function SignUp() {
  return (
    <center>
      <div className="Signup">
        <p className="para" style={{ marginBottom: 20, marginTop: 40 }}>
          <strong> Sign Up</strong>
        </p>
        <Form style={{ marginTop: 70 }}>
          <Form.Control
            className="mb-3"
            placeholder="First name"
            style={{ width: 270 }}
            required
          />
          <Form.Control
            className="mb-3"
            placeholder="Last name"
            style={{ width: 270 }}
            required
          />
          <Form.Control
            className="mb-3"
            controlId="formBasicEmail"
            type="email"
            placeholder="Enter email"
            style={{ width: 270 }}
            required
          />
          <Form.Control
            className="mb-3"
            controlId="formBasicPassword"
            type="password"
            placeholder="Password"
            style={{ width: 270 }}
            required
          />
          <button type="submit" className="button" component={Link} to="/LogIn">
            {" "}
            SignUp
          </button>
        </Form>
      </div>
    </center>
  );
}
export default SignUp;
