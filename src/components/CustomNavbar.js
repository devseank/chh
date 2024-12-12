import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpeg'; // Import your logo image

function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation(); // To track active page

  const handleLinkClick = () => {
    setExpanded(false); // Collapse the menu when a link is clicked
  };

  return (
    <Navbar
      bg="light"
      variant="light"
      expand="lg"
      sticky="top"
      expanded={expanded} // Control expanded state
    >
      <Container fluid>
        {/* Navbar Brand with Logo and Text */}
        <Navbar.Brand
          as={Link}
          to="/"
          onClick={handleLinkClick}
          className="d-flex align-items-center"
          style={{
            whiteSpace: 'nowrap',
            maxWidth: 'calc(100% - 60px)',
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
          <span
            className="navbar-text"
            style={{
              fontWeight: 'bold',
              fontSize: '1.2rem',
            }}
          >
            캐나다 홈스쿨 홈스테이
          </span>
        </Navbar.Brand>

        {/* Hamburger Menu */}
        <Navbar.Toggle
          aria-controls="navbar-nav"
          aria-label="Toggle navigation"
          onClick={() => setExpanded(!expanded)} // Toggle expanded state
        />

        {/* Navbar Links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              style={{ color: 'black' }}
              onClick={handleLinkClick} // Collapse on click
              active={location.pathname === '/'}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              style={{ color: 'black' }}
              onClick={handleLinkClick} // Collapse on click
              active={location.pathname === '/about'}
            >
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
              font-size: 1rem;
            }
            img {
              height: 30px;
              width: 30px;
            }
          }
          @media (max-width: 576px) {
            .navbar-text {
              font-size: 0.9rem;
            }
            img {
              height: 25px;
              width: 25px;
            }
          }
        `}
      </style>
    </Navbar>
  );
}

export default CustomNavbar;
