import React from "react";
import { useContext } from "react";
import { CartProduct } from "../App";
import { Nav, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
function Header() {
  const cartProduct = useContext(CartProduct);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <strong>ShoppersDelight</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Products" className="product">
                Products
              </Nav.Link>
              <Nav.Link href="/Cart">
                Cart{" "}
                <span className="badge">{cartProduct.totalItemsInCart}</span>
              </Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link href="/Login">LogIn</Nav.Link>
              <Nav.Link eventKey={2} href="/Signup">
                SignUp
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
