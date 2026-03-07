import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Reveal from "../common/Reveal";

export default function CtaSection() {
  return (
    <section className="cta-section">
      <Container>
        <Row className="align-items-center gy-4">
          <Col lg={8}>
            <Reveal direction="left">
              <h2>Looking to Buy a New Property or Sell an Existing One?</h2>
            </Reveal>
          </Col>
          <Col lg={4} className="text-lg-end">
            <Reveal direction="right">
              <div className="d-flex gap-3 justify-content-lg-end flex-wrap">
                <Button className="btn-light-outline rounded-pill px-4">
                  Rent Properties
                </Button>
                <Button className="btn-white rounded-pill px-4">
                  Buy Properties
                </Button>
              </div>
            </Reveal>
          </Col>
        </Row>
      </Container>
    </section>
  );
}