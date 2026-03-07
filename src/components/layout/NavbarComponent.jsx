import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavbarComponent() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>

        <Navbar.Brand className="logo">
          <span className="logo-icon">🏠</span>
          <div>
            <h5>BHL Landbase</h5>
            <small>Real Estate Center</small>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="mx-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Listing</Nav.Link>
            <Nav.Link>Property</Nav.Link>
            <Nav.Link>Agency</Nav.Link>
            <Nav.Link>Blog</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link>Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}