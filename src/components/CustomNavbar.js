import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg'; // Import your logo image

function CustomNavbar() {
  const imageSize = 60; // Set the size of the image (adjust as needed)

  return (
    <Navbar bg="light" variant="light" expand="lg" sticky="top">
      <Container className="d-flex justify-content-start">
        {/* Navbar Brand with Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Logo"
            width={imageSize}  // Set the width of the logo
            height={imageSize} // Set the height of the logo
            className="d-inline-block align-top me-2"
          />
          <span
            style={{
              fontSize: `${imageSize}px`, // Match the font size to the image size
              fontWeight: 'bold',
              lineHeight: `${imageSize}px`, // Ensure vertical alignment
            }}
          >
            캐나다 홈스쿨 홈스테이
          </span>
        </Navbar.Brand>

        {/* Navbar Toggle Button */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
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
