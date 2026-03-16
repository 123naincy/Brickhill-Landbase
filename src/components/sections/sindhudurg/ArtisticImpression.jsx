import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

import img1 from "../../../assets/artistic-impression-one.png";
import img2 from "../../../assets/artistic-impression-two.jpg";
import img3 from "../../../assets/artistic-impression-three.jpg";
import img4 from "../../../assets/artistic-impression-four.png";
import img5 from "../../../assets/artistic-impression-five.png";
import img6 from "../../../assets/artistic-impression-seven.png";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6
];

export default function ArtisticImpression() {
  return (
    <section className="artistic-section">

      <Container>

        {/* Heading */}

        <div className="text-center mb-5">
          <h2 className="artistic-title">
            Artistic Impression of Development
          </h2>

          <p className="artistic-sub">
            Visual representation of the planned development,
            showcasing the lifestyle and infrastructure envisioned
            for the project.
          </p>
        </div>


        {/* Image Grid */}

        <Row className="g-4">

          {images.map((img, index) => (

            <Col lg={4} md={6} key={index}>

              <motion.div
                className="artistic-card"
                initial={{ opacity:0, y:40 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:0.5, delay:index*0.1 }}
              >

                <img src={img} alt="Artistic Development" />

                <div className="artistic-overlay">
                  Artistic Impression
                </div>

              </motion.div>

            </Col>

          ))}

        </Row>

      </Container>

    </section>
  );
}