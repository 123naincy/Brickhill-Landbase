import { useState } from "react";
import { Container, Row, Col, Card, Modal } from "react-bootstrap";
import { upcomingEvents } from "../../data/eventsData";

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section className="events-section">
      <Container>

        <h2 className="section-title">Upcoming Events</h2>

        <Row>
          {upcomingEvents.map((event) => (
            <Col md={6} lg={4} key={event.id} className="mb-4">

              <Card
                className="event-card"
                onClick={() => setSelectedEvent(event)}
              >
                {/* Image */}
                <div className="event-img-wrapper">
                  <Card.Img src={event.images[0]} />
                  <span className="event-date">{event.date}</span>
                </div>

                <Card.Body>
                  <Card.Title>{event.title}</Card.Title>

                  <p className="event-meta">📍 {event.location}</p>
                  <p className="event-meta">⏰ {event.time}</p>

                  <Card.Text className="event-desc">
                    {event.description}
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>
          ))}
        </Row>

        {/* 🔥 Modal */}
        <Modal
          show={!!selectedEvent}
          onHide={() => setSelectedEvent(null)}
          size="lg"
          centered
        >
          {selectedEvent && (
            <>
              <Modal.Header closeButton>
                <Modal.Title>{selectedEvent.title}</Modal.Title>
              </Modal.Header>

              <Modal.Body>

                {/* Images Grid */}
                <Row>
                  {selectedEvent.images.map((img, index) => (
                    <Col md={4} key={index} className="mb-3">
                      <img
                        src={img}
                        alt="event"
                        className="w-100 rounded"
                      />
                    </Col>
                  ))}
                </Row>

                {/* Details */}
                <p><strong>Date:</strong> {selectedEvent.date}</p>
                <p><strong>Location:</strong> {selectedEvent.location}</p>
                <p><strong>Time:</strong> {selectedEvent.time}</p>

                <p>{selectedEvent.description}</p>

              </Modal.Body>
            </>
          )}
        </Modal>

      </Container>
    </section>
  );
}