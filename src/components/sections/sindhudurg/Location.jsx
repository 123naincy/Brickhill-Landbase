import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { MapPin, Plane, Building2, Coffee } from "lucide-react";

export default function Location() {

  const locations = [
    {
      icon: Plane,
      place: "Goa Airport",
      distance: "30 mins"
    },
    {
      icon: Building2,
      place: "Film City",
      distance: "40 mins"
    },
    {
      icon: Coffee,
      place: "Beach Shacks",
      distance: "25 mins"
    },
    {
      icon: MapPin,
      place: "Shopping Districts",
      distance: "12 mins"
    }
  ];

  return (
    <section className="location-section">

      <Container>

        {/* Heading */}

        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h2 className="display-4 fw-bold mb-3">
            Perfect Location
          </h2>

          <p className="text-muted">
            Connected to everything that matters
          </p>

        </motion.div>


        {/* Location Cards */}

        <Row className="g-4 justify-content-center mb-5">

          {locations.map((loc, index) => {

            const Icon = loc.icon;

            return (
              <Col md={6} lg={3} key={index}>

                <motion.div
                  className="location-card text-center"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15
                  }}
                >

                  <div className="location-icon">

                    <Icon size={28} color="white" />

                  </div>

                  <h4 className="fw-bold mt-3">
                    {loc.place}
                  </h4>

                  <p className="location-distance">
                    {loc.distance} away
                  </p>

                </motion.div>

              </Col>
            );
          })}

        </Row>


        {/* Description Box */}

        <motion.div
          className="location-highlight text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >

          <h3 className="fw-bold text-white mb-3">
            Strategic Location in North Goa
          </h3>

          <p className="text-light">
            Nestled in the heart of North Goa, our resort plots offer the
            perfect balance of tranquility and accessibility. Experience
            pristine beaches, vibrant culture and the cosmopolitan lifestyle
            that makes Goa a world-renowned destination.
          </p>

        </motion.div>

      </Container>

    </section>
  );
}