import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MapPin, Phone, Mail, Clock3 } from "lucide-react";

function ContactInfoCards() {
  const contactCards = [
    {
      icon: <Phone size={28} strokeWidth={1.8} />,
      title: "Call Us",
      text: "+91 98765 43210",
    },
    {
      icon: <Mail size={28} strokeWidth={1.8} />,
      title: "Email Us",
      text: "info@yourbrand.com",
    },
    {
      icon: <MapPin size={28} strokeWidth={1.8} />,
      title: "Visit Us",
      text: "Your Office Address, City, State",
    },
    {
      icon: <Clock3 size={28} strokeWidth={1.8} />,
      title: "Working Hours",
      text: "Mon - Sat : 10:00 AM - 7:00 PM",
    },
  ];

  return (
    <section className="contact-info-section">
      <Container>
        <Row className="g-4">
          {contactCards.map((item, index) => (
            <Col lg={3} md={6} key={index}>
              <div className="contact-info-card">
                <div className="contact-info-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ContactInfoCards;