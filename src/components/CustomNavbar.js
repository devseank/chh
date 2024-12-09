import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CustomNavbar() {
  return (
    <Navbar bg="light" variant="light" expand="lg" sticky="top">
      <Container fluid>
        {/* Navbar Brand - Left Aligned */}
        <Navbar.Brand as={Link} to="/" style={{ color: 'black' }}>
          캘거리 홈스쿨 홈스테이
        </Navbar.Brand>

        {/* Toggle Button for Small Screens */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar Links - Next to the Brand */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-3">
            <Nav.Link as={Link} to="/" style={{ color: 'black' }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: 'black' }}>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
