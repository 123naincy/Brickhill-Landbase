import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaMapMarkedAlt,
  FaShieldAlt,
  FaChartLine,
  FaLeaf
} from "react-icons/fa";

const features = [
  {
    icon: FaMapMarkedAlt,
    title: "Prime Locations",
    description:
      "Strategically located land parcels in high-growth areas with strong future appreciation."
  },
  {
    icon: FaShieldAlt,
    title: "Clear Legal Titles",
    description:
      "Every property comes with verified documents and legally clear ownership."
  },
  {
    icon: FaChartLine,
    title: "High Investment Growth",
    description:
      "Invest in emerging locations with strong ROI and long-term value."
  },
  {
    icon: FaLeaf,
    title: "Nature Friendly Projects",
    description:
      "Projects surrounded by greenery offering peaceful and sustainable living."
  }
];

export default function WhyChoose() {
  return (
    <section className="why-section">

      <Container>

        {/* Section Header */}

        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="why-title">
            Why Choose Brickhill Landbase?
          </h2>

          <p className="why-sub">
            We provide more than just land we create opportunities for
            investment, growth, and long-term prosperity.
          </p>
        </motion.div>


        {/* Feature Cards */}

        <Row className="g-4">

          {features.map((feature, index) => (

            <Col lg={3} md={6} key={index}>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >

                <Card className="feature-card h-100">

                  <div className="feature-icon">
                    <feature.icon size={26} />
                  </div>

                  <Card.Body>

                    <h5 className="feature-title">
                      {feature.title}
                    </h5>

                    <p className="feature-desc">
                      {feature.description}
                    </p>

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