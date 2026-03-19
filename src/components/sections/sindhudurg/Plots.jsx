import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";

import centerImg from "../../../assets/sindhudurg-hero-three.jpg";
import icon1 from "../../../assets/sindhudurg-hero-three.jpg";
import icon2 from "../../../assets/sindhudurg-hero-three.jpg";
import icon3 from "../../../assets/sindhudurg-hero-three.jpg";
import icon4 from "../../../assets/sindhudurg-hero-three.jpg";

export default function ArtisticImpressionLuxury() {
  const leftCards = [
    {
      icon: icon1,
      title: "25 : 25 : 25 : 25",
      desc: "25% Booking • 25% After 30 Days • 25% After 60 Days • 25% On Possession",
    },
    {
      icon: icon2,
      title: "50 : 50",
      desc: "50% Booking • 50% On Possession",
    },
  ];

  const rightCards = [
    {
      icon: icon3,
      title: "90 : 10",
      desc: "90% Booking • 10% On Possession",
    },
    {
      icon: icon4,
      title: "Easy Assistance",
      desc: "Flexible guidance for booking, documentation, and smooth buying support.",
    },
  ];

  const highlightsLeft = [
    "Fully developed plots",
    "Clear title / 7/12 extract",
  ];

  const highlightsRight = [
    "Secure gated community",
    "Near Goa lifestyle zone",
  ];

  return (
    <section className="artistic-luxury-section">
      <Container>
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="luxury-title">Artistic Impression of Development</h2>
          <p className="luxury-sub">
            Experience the future lifestyle through our planned visuals.
          </p>
        </motion.div>

        <Row className="align-items-center g-4">
          <Col lg={3} md={6}>
            {leftCards.map((item, i) => (
              <motion.div
                key={i}
                className="feature-card payment-feature-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <img src={item.icon} alt={item.title} />
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </Col>

          <Col lg={6}>
            <motion.div
              className="center-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={centerImg}
                alt="Artistic impression"
                className="center-img"
              />

              <div className="center-content">
                <h2 className="plot-size">350 – 450</h2>

                <div className="units">
                  <span>Sq. yd.</span>
                  <span>Sq. yd.</span>
                </div>

                <div className="center-highlights">
                  <ul>
                    {highlightsLeft.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <ul>
                    {highlightsRight.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <Button className="price-btn">Get Best Price</Button>
              </div>
            </motion.div>
          </Col>

          <Col lg={3} md={6}>
            {rightCards.map((item, i) => (
              <motion.div
                key={i}
                className="feature-card payment-feature-card"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <img src={item.icon} alt={item.title} />
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}