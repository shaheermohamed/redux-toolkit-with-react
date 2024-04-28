import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clear } from "../store/cartSlice";
const NavBar = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);
  const deleteCart = () => {
    dispatch(clear());
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Redux Toolkit</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/products">Products</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Link to="/cart">MY Bag {cartProducts.length}</Link>
            {cartProducts.length ? (
              <Button onClick={deleteCart}>Clear Cart</Button>
            ) : null}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
