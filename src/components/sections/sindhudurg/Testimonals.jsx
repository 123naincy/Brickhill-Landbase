import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai",
      text: "Best investment decision we ever made. The resort lifestyle and appreciation potential are incredible.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      location: "Delhi",
      text: "Waking up to ocean breeze every morning is a dream come true. The amenities are top-notch.",
      rating: 5,
    },
    {
      name: "Arjun Patel",
      location: "Bangalore",
      text: "The location is perfect, the community is wonderful. Could not ask for more in a vacation home.",
      rating: 5,
    },
  ];

  return (
    <section className="testimonial-luxury-section">
      <Container>
        <motion.div
          className="testimonial-heading text-center"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="testimonial-tag">Client Stories</span>
          <h2>Happy Residents</h2>
          <p>Hear from our community members</p>
        </motion.div>

        <Row className="g-4 justify-content-center">
          {testimonials.map((testimonial, index) => (
            <Col md={6} lg={4} key={index}>
              <motion.div
                className="testimonial-card-new"
                initial={{ opacity: 0, y: 70, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -10 }}
              >
                <div className="quote-icon">
                  <Quote size={28} />
                </div>

                {/* Stars */}
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="star-icon" />
                  ))}
                </div>

                {/* Text */}
                <p className="testimonial-text">
                  {testimonial.text}
                </p>

                {/* User */}
                <div className="testimonial-user">
                  <div className="avatar">
                    {testimonial.name[0]}
                  </div>

                  <div>
                    <h5>{testimonial.name}</h5>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}