import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/Header.css";
function Header() {
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <strong>ShoppersDelight</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/products" className="product">
              Products
            </Nav.Link>
            <Nav.Link href="/cart">
              Cart <span className="badge">0</span>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">LogIn</Nav.Link>
            <Nav.Link eventKey={2} href="/signup">
              SignUp
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
