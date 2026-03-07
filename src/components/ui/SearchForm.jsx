import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

export default function SearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="g-3 align-items-end">
        <Col lg={4}>
          <Form.Group controlId="searchProperty">
            <Form.Label>Search Property</Form.Label>
            <div className="input-icon">
              <FaSearch />
              <Form.Control type="text" placeholder="Search Property" />
            </div>
          </Form.Group>
        </Col>

        <Col lg={4}>
          <Form.Group controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Select defaultValue="Input location">
              <option disabled>Input location</option>
              <option>New York</option>
              <option>California</option>
              <option>London</option>
              <option>Mexico</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col lg={4}>
          <Form.Group controlId="propertyType">
            <Form.Label>Property Type</Form.Label>
            <Form.Select defaultValue="All Type">
              <option>All Type</option>
              <option>Luxury</option>
              <option>Classic</option>
              <option>Modern</option>
              <option>New</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={6} lg={3}>
          <Form.Group controlId="distance">
            <Form.Label>Distance from Location</Form.Label>
            <Form.Select defaultValue="Within 1 Mile">
              <option>Within 1 Mile</option>
              <option>Within 2 Mile</option>
              <option>Within 3 Mile</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={6} lg={3}>
          <Form.Group controlId="bedrooms">
            <Form.Label>Bedrooms</Form.Label>
            <Form.Select defaultValue="Max Rooms">
              <option>Max Rooms</option>
              <option>One Room</option>
              <option>Two Rooms</option>
              <option>Three Rooms</option>
              <option>Four Rooms</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={6} lg={2}>
          <Form.Group controlId="floor">
            <Form.Label>Floor</Form.Label>
            <Form.Select defaultValue="Select Floor">
              <option>Select Floor</option>
              <option>One Floor</option>
              <option>Two Floor</option>
              <option>Three Floor</option>
              <option>Four Floor</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={6} lg={2}>
          <Form.Group controlId="bath">
            <Form.Label>Bath</Form.Label>
            <Form.Select defaultValue="Max Bath">
              <option>Max Bath</option>
              <option>1 Bath</option>
              <option>2 Bath</option>
              <option>3 Bath</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col lg={2}>
          <Button type="submit" className="btn-theme w-100 search-btn">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
}