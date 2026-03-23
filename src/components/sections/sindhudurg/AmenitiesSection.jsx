import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaUmbrellaBeach,
  FaSwimmingPool,
  FaCocktail,
  FaSpa,
  FaTree,
  FaMusic
} from "react-icons/fa";

export default function GoaAmenities() {

  const amenities = [
    { icon: <FaUmbrellaBeach />, title: "Beach Access" },
    { icon: <FaSwimmingPool />, title: "Infinity Pool" },
    { icon: <FaCocktail />, title: "Beach Bar" },
    { icon: <FaSpa />, title: "Luxury Spa" },
    { icon: <FaTree />, title: "Tropical Garden" },
    { icon: <FaMusic />, title: "Sunset Deck" }
  ];

  return (
    <section className="goa-amenities-bold">

      <Container>

        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="section-tag">RESORT EXPERIENCE</p>
          <h2>LUXURY AMENITIES</h2>
        </motion.div>

        <Row className="g-5 mt-5">

          {amenities.map((item, i) => (

            <Col md={4} key={i}>

              <motion.div
                className="amenity-bold-card"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15
                }}
              >

                <div className="amenity-icon">
                  {item.icon}
                </div>

                <h4>{item.title}</h4>

              </motion.div>

            </Col>

          ))}

        </Row>

      </Container>

    </section>
  );
}