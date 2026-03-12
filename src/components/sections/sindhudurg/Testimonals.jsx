import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai",
      text: "Best investment decision we ever made. The resort lifestyle and appreciation potential are incredible.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      location: "Delhi",
      text: "Waking up to ocean breeze every morning is a dream come true. The amenities are top-notch.",
      rating: 5
    },
    {
      name: "Arjun Patel",
      location: "Bangalore",
      text: "The location is perfect, the community is wonderful. Could not ask for more in a vacation home.",
      rating: 5
    }
  ];

  return (
    <section className="testimonial-section">

      <Container>

        {/* Heading */}

        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h2 className="display-4 fw-bold mb-3">
            Happy Residents
          </h2>

          <p className="text-muted">
            Hear from our community members
          </p>

        </motion.div>


        {/* Testimonials */}

        <Row className="g-4 justify-content-center">

          {testimonials.map((testimonial, index) => (

            <Col md={6} lg={4} key={index}>

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2
                }}
              >

                <Card className="testimonial-card">

                  <Card.Body>

                    {/* Stars */}

                    <div className="stars mb-4">

                      {[...Array(testimonial.rating)].map((_, i) => (

                        <Star
                          key={i}
                          size={18}
                          className="star-icon"
                        />

                      ))}

                    </div>


                    {/* Review */}

                    <p className="testimonial-text">

                      "{testimonial.text}"

                    </p>


                    {/* User */}

                    <div className="testimonial-user">

                      <div className="avatar">

                        {testimonial.name[0]}

                      </div>

                      <div>

                        <h5 className="mb-0">
                          {testimonial.name}
                        </h5>

                        <small className="text-muted">
                          {testimonial.location}
                        </small>

                      </div>

                    </div>

                  </Card.Body>

                </Card>

              </motion.div>

            </Col>

          ))}

        </Row>

      </Container>

    </section>
  );
}