import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/Header.css";
import { useStateValue } from "../store";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <Link className="links heads" to="/">
          <strong>ShoppersDelight</strong>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <div style={{marginTop: 10, display:"flex", flexDirection: "row"}}>
            <Link to="/products" className="links product">
              Products
            </Link>
            <Link to="/cart" className="links cart" >
              Cart <span className="badge">{basket?.length}</span>
            </Link>
            </div>
          </Nav>
          <Nav>
            <Link to="/login" className="links">LogIn</Link>
            <Link eventKey={2} to="/signup" className="links">
              SignUp
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
