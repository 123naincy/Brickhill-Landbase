import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const steps = [
  {
    number: "01",
    title: "Browse",
    desc: "Explore our curated collection of premium land investment opportunities."
  },
  {
    number: "02",
    title: "Consult",
    desc: "Speak with our experts to understand the best property investment options."
  },
  {
    number: "03",
    title: "Invest",
    desc: "Complete the legal documentation and secure your property investment."
  },
  {
    number: "04",
    title: "Grow",
    desc: "Watch your land investment appreciate and grow over time."
  }
];

export default function HowItWorks() {
  return (
    <section className="how-section">

      <Container>

        {/* Section Header */}

        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h2 className="how-title">
            How It Works
          </h2>

          <p className="how-sub">
            Four simple steps to secure your future real estate investment.
          </p>

        </motion.div>


        {/* Steps */}

        <Row className="g-4">

          {steps.map((step, index) => (

            <Col lg={3} md={6} key={index}>

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="step-wrapper"
              >

                <Card className="step-card">

                  <div className="step-number">
                    {step.number}
                  </div>

                  <Card.Body>

                    <h4>{step.title}</h4>

                    <p>{step.desc}</p>

                  </Card.Body>

                </Card>

                {index < 3 && (
                  <div className="step-arrow">
                    <FaArrowRight />
                  </div>
                )}

              </motion.div>

            </Col>

          ))}

        </Row>

      </Container>

    </section>
  );
}