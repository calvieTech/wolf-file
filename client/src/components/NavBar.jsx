import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar
      bg="primary"
      data-bs-theme="dark"
      collapseOnSelect
      expand="sm"
    >
      <Container>
        <Navbar.Brand href="/">Wolf File</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav defaultActiveKey="/" as="ul">
            <Nav.Item as="li">
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/register">Register</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
