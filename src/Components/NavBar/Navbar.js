import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarExpanded(!navbarExpanded);
  };

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      expanded={navbarExpanded}
      onToggle={handleNavbarToggle}
    >
  <Container>
    <Navbar.Brand href="#home">Learning all about React!!</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <br/>
        <Nav.Link href="#link">Projects</Nav.Link>
        <NavDropdown title="See More" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">What I've Got Cooking</NavDropdown.Item>
          <br/>
          <NavDropdown.Item href="#action/3.2">Videos!</NavDropdown.Item>
          <br/>
          <NavDropdown.Item href="#action/3.3">Coming Soon</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/34">Contact Me</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
);
}

export default NavBar;
