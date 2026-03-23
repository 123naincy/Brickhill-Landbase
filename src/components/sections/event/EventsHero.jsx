import React from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

function EventsHero() {
  return (
    <section className="events-hero">
      <div className="events-hero-overlay"></div>

      <Container>
        <div className="events-hero-content">

          {/* 🔥 BREADCRUMB */}
          <Breadcrumb className="events-breadcrumb">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>

            <Breadcrumb.Item active>
              Events
            </Breadcrumb.Item>
          </Breadcrumb>

          <p className="events-hero-tag">OUR EVENTS</p>

          <h1 className="events-hero-title">
            Experiences That <span>Inspire</span>
          </h1>

          <p className="events-hero-subtitle">
            Explore our upcoming showcases, site events, launches, and memorable
            milestones that define our journey.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default EventsHero;