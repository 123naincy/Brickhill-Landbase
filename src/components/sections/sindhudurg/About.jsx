import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Palmtree, Waves, Sun } from "lucide-react";

export default function About() {

  const features = [
    {
      icon: Palmtree,
      title: "Tropical Paradise",
      desc: "Surrounded by swaying palms and exotic flora"
    },
    {
      icon: Waves,
      title: "Beach Access",
      desc: "Minutes away from pristine Goan beaches"
    },
    {
      icon: Sun,
      title: "Sunny Climate",
      desc: "Year-round perfect weather for outdoor living"
    }
  ];

  return (
    <section className="about-section py-5">

      <Container>

        {/* Heading Animation */}

        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >

          <h2 className="display-4 fw-bold mb-3">
            Live the Resort Life
          </h2>

          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Experience unparalleled luxury in Goa's most prestigious
            residential development
          </p>

        </motion.div>


        {/* Cards */}

        <Row className="g-4 justify-content-center">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (
              <Col md={4} key={index}>

                <motion.div
                  className="about-card text-center p-4"
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                >

                  <div className="icon-circle mb-4">

                    <Icon size={32} color="white" />

                  </div>

                  <h4 className="fw-bold mb-3">
                    {item.title}
                  </h4>

                  <p className="text-muted">
                    {item.desc}
                  </p>

                </motion.div>

              </Col>
            );
          })}

        </Row>

      </Container>

    </section>
  );
}