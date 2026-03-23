import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

function ContactFormSection() {
  return (
    <div className="contact-form-box">
      <p className="contact-section-tag">SEND A MESSAGE</p>
      <h2 className="contact-section-title">
        Enquire For <span>Premium Living</span>
      </h2>
      <p className="contact-section-text">
        Fill in your details and our team will connect with you shortly
        to guide you through the project, pricing, and site visit process.
      </p>

      <Form>
        <Row className="g-4">
          <Col md={6}>
            <Form.Group>
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Control type="email" placeholder="Email Address" />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Control type="text" placeholder="Phone Number" />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Control type="text" placeholder="Subject" />
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Form.Group>
              <Form.Control
                as="textarea"
                rows={6}
                placeholder="Write your message..."
              />
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Button className="contact-submit-btn" type="submit">
              Send Message
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default ContactFormSection;