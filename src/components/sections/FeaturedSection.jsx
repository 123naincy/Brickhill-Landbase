import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRulerCombined, FaMapMarkerAlt, FaLayerGroup } from "react-icons/fa";
import card from "../../assets/goa-carnivals-beach-water-sports-activities.jpg";

const properties = [
  {
    title: "Premium Residential Villa Plots",
    price: "₹25,000 / sq.yd",
    location: "Sindhudurg, Maharashtra",
    projectArea: "6.2 Acre",
    plotSizes: "350 – 450 sq.yd",
    link: "/sindhudurg"
  }
];

export default function FeaturedSection() {
  return (
    <section className="featured">

      <Container>

        {/* Header */}

        <Row className="align-items-center section-header mb-5">

          <Col lg={8}>
            <h2 className="section-title">
              Premium Residential Plots Near Goa
            </h2>

            <p className="section-subtitle">
              Resort-style plots in Sindhudurg with sizes ranging from
              <strong> 350 – 450 sq.yd</strong>, perfect for villas and
              high-return real estate investments.
            </p>
          </Col>

          <Col lg={4} className="text-lg-end mt-3 mt-lg-0">
            <Link to="/properties" className="view-all-btn">
              Explore All Plots →
            </Link>
          </Col>

        </Row>


        {/* Property Cards */}

        <Row>

          {properties.map((item, index) => (

            <Col lg={4} md={6} key={index}>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >

                <Card className="property-card">

                  {/* Image */}

                  <div className="img-wrapper">

                    <Card.Img src={card} />

                    <div className="overlay"></div>

                    <div className="price-tag">
                      {item.price}
                    </div>

                  </div>


                  {/* Card Body */}

                  <Card.Body>

                    <h4 className="property-title">
                      {item.title}
                    </h4>

                    <p className="location">
                      <FaMapMarkerAlt /> {item.location}
                    </p>


                    <div className="property-info">

                      <span>
                        <FaRulerCombined /> {item.plotSizes}
                      </span>

                      <span>
                        <FaLayerGroup /> {item.projectArea}
                      </span>

                    </div>


                    <Link to={item.link} className="details-btn">
                      View Details
                    </Link>

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