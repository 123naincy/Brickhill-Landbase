import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Reveal from "../common/Reveal";
import { testimonials } from "../data/siteData";

export default function TestimonialsSection() {
  return (
    <section className="section-space bg-white">
      <Container>
        <Row className="g-4">
          {testimonials.map((item, index) => (
            <Col lg={4} key={item.id}>
              <Reveal delay={index * 120}>
                <div className="testimonial-card">
                  <p className="testimonial-text">“{item.quote}”</p>
                  <div className="testimonial-author">
                    <img src={item.image} alt={item.name} />
                    <div>
                      <h6>{item.name}</h6>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}