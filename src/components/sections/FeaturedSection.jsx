import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt } from "react-icons/fa";
import card from "../../assets/hero-slider-three.jpg";

const properties = [
  {
    title: "Luxury Villa",
    price: "$850,000",
    location: "New York, USA",
    beds: 4,
    baths: 3,
    area: "2500 sqft"
  },
  {
    title: "Modern Apartment",
    price: "$420,000",
    location: "California, USA",
    beds: 3,
    baths: 2,
    area: "1800 sqft"
  },
  {
    title: "Family House",
    price: "$560,000",
    location: "Chicago, USA",
    beds: 4,
    baths: 3,
    area: "2200 sqft"
  },
  {
    title: "Beach House",
    price: "$900,000",
    location: "Miami, USA",
    beds: 5,
    baths: 4,
    area: "3000 sqft"
  }
];

export default function FeaturedSection() {
  return (
    <section className="featured">

      <Container>

        <div className="d-flex justify-content-between align-items-center mb-5">
          <h2>Featured Properties</h2>
          <a className="view-all" href="#">View All →</a>
        </div>

        <Row>

          {properties.map((item, index) => (

            <Col lg={4} md={6} key={index}>

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >

                <Card className="property-card">

                  <div className="price-tag">{item.price}</div>

                  <div className="img-wrapper">
                    <Card.Img src={card} />
                  </div>

                  <Card.Body>

                    <h4>{item.title}</h4>

                    <p className="location">
                      <FaMapMarkerAlt /> {item.location}
                    </p>

                    <div className="property-info">

                      <span>
                        <FaBed /> {item.beds} Beds
                      </span>

                      <span>
                        <FaBath /> {item.baths} Baths
                      </span>

                      <span>
                        <FaRulerCombined /> {item.area}
                      </span>

                    </div>

                    <button className="details-btn">
                      View Details
                    </button>

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