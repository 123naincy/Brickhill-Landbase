import React from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import SectionHeader from "../common/SectionHeader";
import Reveal from "../common/Reveal";
import { blogPosts } from "../data/siteData";

export default function BlogSection() {
  return (
    <section className="section-space section-soft" id="blog">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="News & Article"
            title="Stay Update With Realshed"
            description="Lorem ipsum dolor sit amet consectetur adipisicing sed do eiusmod tempor incididunt labore dolore magna aliqua enim."
          />
        </Reveal>

        <Row className="g-4">
          {blogPosts.map((post, index) => (
            <Col lg={4} md={6} key={post.id}>
              <Reveal delay={index * 120}>
                <Card className="blog-card border-0 h-100">
                  <div className="card-media">
                    <Card.Img variant="top" src={post.image} alt={post.title} />
                    <Badge className="badge-featured">Featured</Badge>
                  </div>

                  <Card.Body className="card-content">
                    <h4 className="property-title">{post.title}</h4>

                    <div className="blog-meta">
                      <span className="card-author mb-0">
                        <img src={post.authorImage} alt={post.author} />
                        {post.author}
                      </span>
                      <span className="blog-date">
                        <FaCalendarAlt /> {post.date}
                      </span>
                    </div>

                    <p className="card-copy mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing sed.
                    </p>

                    <Button variant="outline-success" className="btn-outline-theme mt-2">
                      See Details
                    </Button>
                  </Card.Body>
                </Card>
              </Reveal>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}