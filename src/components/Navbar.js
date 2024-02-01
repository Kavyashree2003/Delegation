import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const AppNavbar = () => {
  return (
    <Navbar style={{marginBottom:"50px"}} bg="primary" variant="dark" sticky="top" expand="lg">
      <Container>
        <Navbar.Brand style={{fontSize:"1.5rem"}} href="/home">Delegate</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{textAlign:"center",}}>
          <Nav className="me-auto" style={{ marginLeft:"auto", gap: "30px" }}>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/signin">Sign in</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
