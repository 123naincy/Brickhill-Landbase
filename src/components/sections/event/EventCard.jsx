import React from "react";
import { CalendarDays, MapPin, Clock3 } from "lucide-react";

function EventCard({ event, type }) {
  return (
    <div className="event-card">
      <div className="event-card-image-wrap">
        <img src={event.image} alt={event.title} className="event-card-image" />
        <div className="event-card-overlay"></div>

        <span className={`event-badge ${type === "upcoming" ? "upcoming" : "completed"}`}>
          {type === "upcoming" ? "Upcoming" : "Completed"}
        </span>
      </div>

      <div className="event-card-content">
        <p className="event-card-datebox">{event.dayMonth}</p>

        <h3>{event.title}</h3>
        <p className="event-card-text">{event.description}</p>

        <div className="event-meta">
          <span>
            <CalendarDays size={16} /> {event.fullDate}
          </span>
          <span>
            <Clock3 size={16} /> {event.time}
          </span>
          <span>
            <MapPin size={16} /> {event.location}
          </span>
        </div>

        <button className="event-card-btn">
          {type === "upcoming" ? "Book Now" : "View Highlights"}
        </button>
      </div>
    </div>
  );
}

export default EventCard;