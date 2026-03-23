import React from "react";
import { Container } from "react-bootstrap";

function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero-overlay"></div>

      <Container>
        <div className="contact-hero-content">
          <p className="contact-hero-tag">GET IN TOUCH</p>
          <h1 className="contact-hero-title">
            Let’s Start A <span>Conversation</span>
          </h1>
          <p className="contact-hero-subtitle">
            We’d love to hear from you. Connect with us for site visits,
            project details, investment opportunities, or any assistance you need.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default ContactHero;