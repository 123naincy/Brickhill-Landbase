import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionHeader from "../common/SectionHeader";
import Reveal from "../common/Reveal";
import { partners } from "../data/siteData";

export default function PartnersSection() {
  return (
    <section className="section-space bg-white">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Our Partners"
            title="We’re going to Became Partners for the Long Run."
          />
        </Reveal>

        <Row className="g-4 justify-content-center">
          {partners.map((logo, index) => (
            <Col lg={2} md={4} xs={6} key={logo}>
              <Reveal delay={index * 80}>
                <div className="partner-card">
                  <img src={logo} alt={`partner-${index + 1}`} />
                </div>
              </Reveal>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}