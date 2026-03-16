import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaFileDownload } from "react-icons/fa";

export default function CtaBanner() {
  return (
    <section className="cta-banner">

      <Container fluid>

        <motion.div
          className="cta-box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <Row className="align-items-center">

            {/* Left Content */}

            <Col lg={8}>

              <h2>
                Book Your Site Visit at <span>Perto The Goa</span>
              </h2>

              <p>
                Limited premium resort-style plots available in Sindhudurg near Goa.
                Secure your dream plot today and enjoy luxury coastal living.
              </p>

            </Col>


            {/* Right Buttons */}

            <Col lg={4} className="cta-buttons">

              <Button className="cta-btn primary-btn">
                <FaPhoneAlt /> Call Now
              </Button>

              <Button className="cta-btn outline-btn">
                <FaFileDownload /> Download Brochure
              </Button>

            </Col>

          </Row>

        </motion.div>

      </Container>

    </section>
  );
}