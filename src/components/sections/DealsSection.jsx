import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionHeader from "../common/SectionHeader";
import Reveal from "../common/Reveal";
import DealCard from "../ui/DealCard";
import { deals } from "../data/siteData";

export default function DealsSection() {
  return (
    <section className="section-space section-soft">
      <Container>
        <Reveal>
          <SectionHeader eyebrow="Hot Property" title="Our Best Deals" />
        </Reveal>

        <Row className="g-4">
          {deals.map((item, index) => (
            <Col lg={3} md={6} key={item.id}>
              <DealCard item={item} delay={index * 100} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}