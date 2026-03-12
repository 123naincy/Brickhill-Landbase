import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="contact-section">

      <Container>

        {/* Heading */}

        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >

          <h2 className="display-4 fw-bold mb-3">
            Get in Touch
          </h2>

          <p className="text-muted">
            Start your journey to paradise today
          </p>

        </motion.div>


        <Row className="g-5 align-items-stretch">

          {/* Contact Info */}

          <Col lg={6}>

            <motion.div
              className="contact-info h-100"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              <h3 className="mb-4 fw-bold">
                Contact Information
              </h3>


              <div className="contact-item">

                <Phone size={24} />

                <div>
                  <small>Phone</small>
                  <p>+91 98765 43210</p>
                </div>

              </div>


              <div className="contact-item">

                <Mail size={24} />

                <div>
                  <small>Email</small>
                  <p>info@goaresortplots.com</p>
                </div>

              </div>


              <div className="contact-item">

                <MapPin size={24} />

                <div>
                  <small>Location</small>
                  <p>North Goa, Goa 403001</p>
                </div>

              </div>


              <div className="visit-box">

                <h5>Visit Our Site Office</h5>

                <p>
                  Open daily from 9 AM to 6 PM.
                  Schedule a tour and experience the lifestyle firsthand.
                </p>

              </div>

            </motion.div>

          </Col>


          {/* Contact Form */}

          <Col lg={6}>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              <Form className="contact-form">

                <Form.Group className="mb-4">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                  />
                </Form.Group>


                <Form.Group className="mb-4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="your.email@example.com"
                  />
                </Form.Group>


                <Form.Group className="mb-4">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="+91 98765 43210"
                  />
                </Form.Group>


                <Form.Group className="mb-4">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Tell us about your requirements..."
                  />
                </Form.Group>


                <Button className="send-btn w-100">

                  Send Message
                  <Send size={18} />

                </Button>

              </Form>

            </motion.div>

          </Col>

        </Row>

      </Container>

    </section>
  );
}