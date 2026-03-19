import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { MapPin, Plane, Building2, Coffee } from "lucide-react";

export default function Location() {
  const locations = [
    {
      icon: Plane,
      place: "Goa Airport",
      distance: "30 mins",
    },
    {
      icon: Building2,
      place: "Film City",
      distance: "40 mins",
    },
    {
      icon: Coffee,
      place: "Beach Shacks",
      distance: "25 mins",
    },
    {
      icon: MapPin,
      place: "Shopping Districts",
      distance: "12 mins",
    },
  ];

  return (
    <section className="location-luxury-section">
      <Container>
        <motion.div
          className="location-heading text-center"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="location-tag">Prime Connectivity</span>
          <h2>Perfect Location</h2>
          <p>Connected to everything that matters</p>
        </motion.div>

        <Row className="g-4 align-items-stretch">
          <Col lg={6}>
            <div className="location-left-panel">
              <Row className="g-4">
                {locations.map((loc, index) => {
                  const Icon = loc.icon;

                  return (
                    <Col sm={6} key={index}>
                      <motion.div
                        className={`location-card-new card-anim-${(index % 4) + 1}`}
                        initial={{ opacity: 0, y: 60, scale: 0.96 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          duration: 0.7,
                          delay: index * 0.12,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10, scale: 1.03 }}
                      >
                        <motion.div
                          className="location-icon-new"
                          animate={{
                            y: [0, -5, 0],
                            boxShadow: [
                              "0 10px 24px rgba(6, 182, 212, 0.22)",
                              "0 16px 30px rgba(20, 184, 166, 0.34)",
                              "0 10px 24px rgba(6, 182, 212, 0.22)",
                            ],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.25,
                          }}
                        >
                          <Icon size={26} strokeWidth={2.1} />
                        </motion.div>

                        <h4>{loc.place}</h4>
                        <p>{loc.distance} away</p>
                      </motion.div>
                    </Col>
                  );
                })}
              </Row>

              <motion.div
                className="location-highlight-new"
                initial={{ opacity: 0, scale: 0.94, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.25 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <div className="highlight-glow"></div>

                <h3>Strategic Location in North Goa</h3>
                <p>
                  Nestled in the heart of North Goa, our resort plots offer the
                  perfect balance of tranquility and accessibility. Experience
                  pristine beaches, vibrant culture, and the cosmopolitan
                  lifestyle that makes Goa a world-renowned destination.
                </p>
              </motion.div>
            </div>
          </Col>

          <Col lg={6}>
            <motion.div
              className="location-map-card"
              initial={{ opacity: 0, x: 50, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <div className="map-header">
                <span className="map-badge">
                  <MapPin size={16} />
                  Project Location
                </span>
                <h3>Explore the Neighborhood</h3>
              </div>

              <motion.div
                className="map-frame-wrap"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="map-shimmer"></div>

                <iframe
                  title="Project Location Map"
                  src="https://www.google.com/maps?q=North%20Goa&z=11&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}