import { useState } from "react"; // Import useState from React
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  const [expanded, setExpanded] = useState(false); // Create a state variable for expanded state

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      fixed="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <br />
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleNavbarToggle}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Start here</Nav.Link>
            <br />
            <Nav.Link href="#link">See More </Nav.Link>

            <NavDropdown title="See Less" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Videos</NavDropdown.Item>
              <br />
              <NavDropdown.Item href="#action/3.2">
                Anything I want
              </NavDropdown.Item>
              <br />
              <NavDropdown.Item href="#action/3.3">
                Coming soon
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Projects</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
