import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaCheckCircle } from "react-icons/fa";
import bg from "../../assets/beautiful-landscape-cityscape-hua-hin-city-around-sea-ocean-bay.jpg";

const points = [
  "Free site visit & expert consultation",
  "100% verified legal documentation",
  "Flexible & investor friendly payment plans",
  "Complete post-purchase assistance"
];

export default function LuxuryInvestment() {
  return (
    <section
      className="luxury-investment"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="overlay"></div>

      <Container>

        <Row className="align-items-center g-5">

          {/* LEFT CONTENT */}

          <Col lg={6}>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >

              <h2 className="luxury-title">
                Invest in Premium <span>Land Opportunities</span>
              </h2>

              <p className="luxury-desc">
                Brickhill Landbase helps you secure premium land investments
                with transparent documentation, expert guidance,
                and long-term value growth.
              </p>

              <div className="luxury-points">

                {points.map((item, index) => (

                  <div key={index} className="luxury-point">
                    <FaCheckCircle />
                    <span>{item}</span>
                  </div>

                ))}

              </div>

              <Button className="luxury-btn">
                Book Free Site Visit
              </Button>

            </motion.div>

          </Col>


          {/* RIGHT FLOATING STATS */}

          <Col lg={6}>

            <div className="stats-wrapper">

              <motion.div
                className="stat-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3>
                  <CountUp end={500} duration={3} />+
                </h3>
                <p>Happy Investors</p>
              </motion.div>


              <motion.div
                className="stat-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h3>
                  <CountUp end={80} duration={3} />+
                </h3>
                <p>Acres Developed</p>
              </motion.div>


              <motion.div
                className="stat-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
              >
                <h3>
                  <CountUp end={25} duration={3} />%
                </h3>
                <p>Average ROI</p>
              </motion.div>

            </div>

          </Col>

        </Row>

      </Container>
    </section>
  );
}