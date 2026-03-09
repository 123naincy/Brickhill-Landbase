import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/logo.png";
export default function NavbarComponent() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>

        <Navbar.Brand className="logo">
          <div className="logo">
            <img src={logo} alt="logo" className="img-fluid" />
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