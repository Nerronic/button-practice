import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/home">Home</Navbar.Brand> {/* Use Link */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Start here</Nav.Link> {/* Use Link */}
            <br/>
            <Nav.Link as={Link} to="/aboutme">About Me</Nav.Link> {/* Add these */}
            <NavDropdown title="See More" id="basic-nav-dropdown">
           
              <NavDropdown.Item as={Link} to="/videos">Videos</NavDropdown.Item> {/*           <NavDropdown.Item as={Link} to="/comingsoon">Coming Soon</NavDropdown.Item> {/* Add these */}
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/projects">Projects</NavDropdown.Item> {/* Add these */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

