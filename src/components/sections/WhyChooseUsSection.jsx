import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaHome, FaHandshake, FaChartLine } from "react-icons/fa";
import whyImg from "../../assets/hero-slider-three.jpg";

const features = [
  {
    icon: <FaHome />,
    title: "Wide Range of Properties",
    desc: "Choose from thousands of verified properties across prime locations."
  },
  {
    icon: <FaHandshake />,
    title: "Trusted by Clients",
    desc: "We build long-term relationships with transparency and trust."
  },
  {
    icon: <FaChartLine />,
    title: "Best Market Price",
    desc: "We offer the most competitive prices in the real estate market."
  }
];

export default function WhyChooseUsSection() {
  return (
    <section className="why-section">

      <Container>

        <Row className="align-items-center">

          {/* LEFT IMAGE */}

          {/* RIGHT CONTENT */}

          <Col lg={6}>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              <h2 className="why-title">
                Why Choose <span>Us</span>
              </h2>

              <p className="why-sub">
                We help you find the best properties with trusted
                service and the most competitive market prices.
              </p>

              {features.map((item, index) => (

                <div className="why-feature" key={index}>

                  <div className="feature-icon">
                    {item.icon}
                  </div>

                  <div>

                    <h5>{item.title}</h5>

                    <p>{item.desc}</p>

                  </div>

                </div>

              ))}

            </motion.div>

          </Col>
  <Col lg={6}>

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              <img
                src={whyImg}
                alt="Why Choose Us"
                className="why-img"
              />

            </motion.div>

          </Col>

        </Row>

      </Container>

    </section>
  );
}