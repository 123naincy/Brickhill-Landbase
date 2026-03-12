import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { TrendingUp, Award, Users, Calendar } from "lucide-react";

export default function Investment() {

  const benefits = [
    {
      icon: TrendingUp,
      title: "25% Annual Growth",
      desc: "Goa real estate consistently appreciates"
    },
    {
      icon: Award,
      title: "Premium Quality",
      desc: "Award-winning design and construction"
    },
    {
      icon: Users,
      title: "Rental Income",
      desc: "High tourism ensures steady rental returns"
    },
    {
      icon: Calendar,
      title: "Flexible Payment",
      desc: "Easy payment plans available"
    }
  ];

  return (
    <section className="investment-section">

      <Container>

        {/* Heading */}

        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h2 className="display-4 fw-bold text-white mb-3">
            Smart Investment
          </h2>

          <p className="text-light">
            More than a home, it's your financial future
          </p>

        </motion.div>


        {/* Investment Benefits */}

        <Row className="g-4 justify-content-center mb-5">

          {benefits.map((benefit, index) => {

            const Icon = benefit.icon;

            return (
              <Col md={6} lg={3} key={index}>

                <motion.div
                  className="investment-card text-center"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15
                  }}
                >

                  <div className="investment-icon">

                    <Icon size={32} color="white" />

                  </div>

                  <h4 className="text-white mt-4 fw-bold">
                    {benefit.title}
                  </h4>

                  <p className="text-light">
                    {benefit.desc}
                  </p>

                </motion.div>

              </Col>
            );
          })}

        </Row>


        {/* Stats Section */}

        <motion.div
          className="stats-box"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >

          <Row className="text-center">

            <Col md={4}>
              <h1 className="stat-number text-teal">
                500+
              </h1>
              <p className="text-light">
                Happy Investors
              </p>
            </Col>

            <Col md={4}>
              <h1 className="stat-number text-cyan">
                45
              </h1>
              <p className="text-light">
                Plots Available
              </p>
            </Col>

            <Col md={4}>
              <h1 className="stat-number text-teal">
                6.2 Acres
              </h1>
              <p className="text-light">
                Prime Residential Land
              </p>
            </Col>

          </Row>

        </motion.div>

      </Container>

    </section>
  );
}