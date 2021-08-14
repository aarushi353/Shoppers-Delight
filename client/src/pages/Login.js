import React from "react";
import { Form } from "react-bootstrap";
import "../components/Buttons.css";

function Login() {
  return (
    <>
      <center>
        <div className="Login">
          <p className="para" style={{ marginBottom: 20, marginTop: 40 }}>
            <strong> Log In</strong>
          </p>
          <Form style={{ marginTop: 20 }} className="Loginform">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                style={{ width: 270 }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                style={{ width: 270 }}
              />
            </Form.Group>
            <button type="submit" className="button">
              Log In
            </button>
          </Form>
        </div>
      </center>
    </>
  );
}

export default Login;
