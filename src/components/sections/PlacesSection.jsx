import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import SectionHeader from "../common/SectionHeader";
import Reveal from "../common/Reveal";
import { places, placeImages } from "../data/siteData";

export default function PlacesSection() {
  return (
    <section className="section-space section-soft">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={5}>
            <Reveal direction="left">
              <SectionHeader
                eyebrow="Top Places"
                title="Most Popular Places"
                description="Lorem ipsum dolor sit amet consectetur adipisicing do eumod tempor."
                align="start"
              />
            </Reveal>

            <div className="place-list">
              {places.map((place, index) => (
                <Reveal key={place} direction="left" delay={index * 100}>
                  <a href="#!" className="place-item">
                    <span>{place}</span>
                    <FaArrowRight />
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal direction="left" delay={250}>
              <Button className="btn-outline-theme rounded-pill px-4 mt-4">
                View All Places
              </Button>
            </Reveal>
          </Col>

          <Col lg={7}>
            <Reveal direction="right">
              <div className="places-grid">
                <img src={placeImages.first} alt="place-1" />
                <img src={placeImages.second} alt="place-2" />
              </div>
            </Reveal>
          </Col>
        </Row>
      </Container>
    </section>
  );
}