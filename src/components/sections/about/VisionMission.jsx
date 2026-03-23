import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Eye, Target } from "lucide-react";
import { motion } from "framer-motion";


function VisionMission() {
  return (
    <section className="vm-new-section">
      <div className="vm-new-glow vm-new-glow-left"></div>
      <div className="vm-new-glow vm-new-glow-right"></div>

      <Container>
        <Row className="align-items-center g-5">

          {/* LEFT CONTENT */}
          <Col lg={5}>
            <motion.div
              className="vm-left"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="vm-tag">VISION & MISSION</p>

              <h2 className="vm-main-title">
                Driven By <span>Purpose</span> <br />
                Built For <span>Legacy</span>
              </h2>

              <p className="vm-description">
                Our foundation is built on clarity, trust, and long-term value.
                We don’t just develop projects — we shape destinations that
                define lifestyle, growth, and legacy.
              </p>
            </motion.div>
          </Col>

          {/* CENTER LINE */}
          <Col lg={1} className="d-none d-lg-flex justify-content-center">
            <div className="vm-divider"></div>
          </Col>

          {/* RIGHT CONTENT */}
          <Col lg={6}>
            <div className="vm-right">

              {/* VISION */}
              <motion.div
                className="vm-glass-card"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <div className="vm-icon">
                  <Eye size={30} />
                </div>

                <div>
                  <h3>Our Vision</h3>
                  <p>
                    To create landmark coastal communities that redefine modern
                    living through thoughtful planning, natural beauty, and
                    timeless design.
                  </p>
                </div>
              </motion.div>

              {/* MISSION */}
              <motion.div
                className="vm-glass-card"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <div className="vm-icon">
                  <Target size={30} />
                </div>

                <div>
                  <h3>Our Mission</h3>
                  <p>
                    To deliver premium developments with trust, transparency,
                    and long-term value, creating spaces where lifestyle and
                    investment grow together.
                  </p>
                </div>
              </motion.div>

            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default VisionMission;