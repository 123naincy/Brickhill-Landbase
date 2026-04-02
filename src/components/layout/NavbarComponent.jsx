import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function NavbarComponent() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>

        <Navbar.Brand as={NavLink} to="/" className="logo">
          <img src={logo} alt="logo" className="img-fluid" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">

          <Nav className="mx-auto">

            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/About">
              About Us
            </Nav.Link>
            <Nav.Link as={NavLink} to="/sindhudurg">
              Sindhudurg
            </Nav.Link>
             {/* { <Nav.Link as={NavLink} to="/event">
            Event
            </Nav.Link> } */}
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>

          </Nav>

          <Nav>
            <Nav.Link as={NavLink} to="/login">
              Sign In
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}