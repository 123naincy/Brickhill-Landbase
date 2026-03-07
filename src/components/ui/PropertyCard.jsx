import React from "react";
import { Card, Badge, Button } from "react-bootstrap";
import { FaBed, FaBath, FaVectorSquare } from "react-icons/fa";
import Reveal from "../common/Reveal";

export default function PropertyCard({ item, delay = 0 }) {
  const statusClass =
    item.status === "For Rent"
      ? "status-rent"
      : item.status === "Sold Out"
      ? "status-sold"
      : "status-buy";

  return (
    <Reveal delay={delay}>
      <Card className="property-card border-0 h-100">
        <div className="card-media">
          <Card.Img variant="top" src={item.image} alt={item.title} />
          <Badge className="badge-featured">Featured</Badge>
        </div>

        <Card.Body className="card-content">
          <div className="card-topline">
            <div className="card-author">
              <img src={item.authorImage} alt={item.author} />
              <span>{item.author}</span>
            </div>
            <span className={`status-pill ${statusClass}`}>{item.status}</span>
          </div>

          <h4 className="property-title">{item.title}</h4>
          <div className="price-label">Start From</div>
          <div className="property-price">{item.price}</div>
          <p className="card-copy">{item.description}</p>

          <div className="property-meta">
            <span>
              <FaBed /> 3 Beds
            </span>
            <span>
              <FaBath /> 2 Baths
            </span>
            <span>
              <FaVectorSquare /> 600 Sq Ft
            </span>
          </div>

          <Button variant="outline-success" className="btn-outline-theme w-100 mt-4">
            See Details
          </Button>
        </Card.Body>
      </Card>
    </Reveal>
  );
}