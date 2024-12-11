import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg'; // Import your logo image

function CustomNavbar() {
  return (
    <Navbar
      bg="light"
      variant="light"
      expand="lg"
      sticky="top"
      style={{ position: 'relative' }}
    >
      <Container fluid>
        {/* Navbar Brand with Logo and Text */}
        <Navbar.Brand
          as={Link}
          to="/chh"
          className="d-flex align-items-center"
          style={{
            whiteSpace: 'nowrap', // Prevent wrapping
            maxWidth: 'calc(100% - 60px)', // Prevent overlap with hamburger
          }}
        >
          {/* Responsive Logo */}
          <img
            src={logo}
            alt="Logo"
            className="d-inline-block align-top me-2"
            style={{
              height: '50px',
              width: '50px',
            }}
          />
          {/* Responsive Text */}
          <span
            className="navbar-text"
            style={{
              fontWeight: 'bold',
              fontSize: '1.2rem', // Default text size
            }}
          >
            캐나다 홈스쿨 홈스테이
          </span>
        </Navbar.Brand>

        {/* Hamburger Menu Always Top-Right */}
        <Navbar.Toggle
          aria-controls="navbar-nav"
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            zIndex: 1050,
          }}
        />

        {/* Navbar Links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/chh" style={{ color: 'black' }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: 'black' }}>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Inline Responsive CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            .navbar-text {
              font-size: 1rem; /* Reduce text size */
            }
            img {
              height: 30px;
              width: 30px; /* Reduce logo size */
            }
          }
          @media (max-width: 576px) {
            .navbar-text {
              font-size: 0.9rem; /* Further reduce text size */
            }
            img {
              height: 25px;
              width: 25px; /* Further reduce logo size */
            }
          }
        `}
      </style>
    </Navbar>
  );
}

export default CustomNavbar;
