import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventsTabs from "./EventsTabs";
import EventCard from "./EventCard";

import event1 from "../../../assets/hero-slider-three.jpg";
import event2 from "../../../assets/hero-slider-three.jpg";
import event3 from "../../../assets/hero-slider-three.jpg";
import event4 from "../../../assets/hero-slider-three.jpg";

function EventsSection() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingEvents = [
    {
      title: "Luxury Project Showcase",
      dayMonth: "12 Aug",
      fullDate: "12 August 2026",
      time: "11:00 AM",
      location: "Sales Gallery, Mohali",
      description:
        "Join us for an exclusive preview of our premium development with project walkthrough, pricing insights, and investor interaction.",
      image: event1,
    },
    {
      title: "Site Visit Experience",
      dayMonth: "18 Aug",
      fullDate: "18 August 2026",
      time: "09:30 AM",
      location: "Project Site, Sindhudurg",
      description:
        "Experience the location, planning, lifestyle amenities, and future potential through a guided premium site visit.",
      image: event2,
    },
  ];

  const completedEvents = [
    {
      title: "Grand Project Launch",
      dayMonth: "24 Jul",
      fullDate: "24 July 2026",
      time: "05:00 PM",
      location: "Chandigarh",
      description:
        "A successful launch evening featuring investors, channel partners, presentations, and premium hospitality.",
      image: event3,
    },
    {
      title: "Investor Meet 2026",
      dayMonth: "02 Jul",
      fullDate: "02 July 2026",
      time: "04:00 PM",
      location: "Delhi NCR",
      description:
        "A curated networking event where investors explored project opportunities, returns, and growth potential.",
      image: event4,
    },
  ];

  const eventsToShow =
    activeTab === "upcoming" ? upcomingEvents : completedEvents;

  return (
    <section className="events-section">
      <div className="events-glow events-glow-left"></div>
      <div className="events-glow events-glow-right"></div>

      <Container>
        <div className="events-section-header">
          <p className="events-section-tag">EVENT CALENDAR</p>
          <h2 className="events-section-title">
            Explore Our <span>Event Journey</span>
          </h2>
          <p className="events-section-text">
            Discover what’s coming next and revisit the moments that shaped our brand.
          </p>
        </div>

        <EventsTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <Row className="g-4">
          {eventsToShow.map((event, index) => (
            <Col lg={6} key={index}>
              <EventCard event={event} type={activeTab} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default EventsSection;