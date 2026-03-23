import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactFormSection from "./ContactFormSection";
import ContactMapCard from "./ContactMapCard";
import ContactHelpCard from "./ContactHelpCard";

function ContactMainSection() {
  return (
    <section className="contact-main-section">
      <div className="contact-glow contact-glow-left"></div>
      <div className="contact-glow contact-glow-right"></div>

      <Container>
        <Row className="g-5 align-items-stretch">
          <Col lg={7}>
            <ContactFormSection />
          </Col>

          <Col lg={5}>
            <div className="contact-side-panel">
              <ContactMapCard />
              <ContactHelpCard />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactMainSection;