import { Row, Col, Form, Button } from "react-bootstrap";

export default function SearchBox() {
  return (
    <div className="search-box">

      <Row>

        <Col md={3}>
          <Form.Select>
            <option>Buy</option>
            <option>Rent</option>
          </Form.Select>
        </Col>

        <Col md={3}>
          <Form.Control placeholder="Location" />
        </Col>

        <Col md={3}>
          <Form.Select>
            <option>Property Type</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Office</option>
          </Form.Select>
        </Col>

        <Col md={3}>
          <Button className="search-btn">Search</Button>
        </Col>

      </Row>

    </div>
  );
}