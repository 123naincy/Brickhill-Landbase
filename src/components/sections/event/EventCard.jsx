// EventCard.jsx
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <Card className="event-card">
      
      {/* Image */}
      <div className="event-img-wrapper">
        <Card.Img variant="top" src={event.image} />
        <span className="event-date">{event.date}</span>
      </div>

      {/* Content */}
      <Card.Body>
        <Card.Title>{event.title}</Card.Title>

        <p className="event-meta">📍 {event.location}</p>
        <p className="event-meta">⏰ {event.time}</p>

        <Card.Text className="event-desc">
          {event.description}
        </Card.Text>

        <Link to={`/events/${event.slug}`}>
          <Button className="event-btn w-100">
            View Details
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}