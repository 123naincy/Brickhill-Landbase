import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";
import {
  FaRulerCombined,
  FaMapMarkerAlt,
  FaLayerGroup
} from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import goaCard from "../../assets/goa-carnivals-beach-water-sports-activities.jpg";
import edenCard from "../../assets/eden-properties.jpeg";
import panipatCard from "../../assets/industrial.png";
import bridalCard from "../../assets/bridal-about.png";

const properties = [
  {
    title: "Residential Villa Plots",
    price: "₹25,000 / sq.yd",
    location: "Sindhudurg, Maharashtra",
    projectArea: "6.2 Acre",
    plotSizes: "350 – 450 sq.yd",
    image: goaCard,
    link: "/sindhudurg"
  },
  {
    title: "Eden Street",
    price: "₹1.25Cr",
    location: "Mohali, Chandigarh",
    projectArea: "2 Acre",
    plotSizes: "16' X 66' 16' X 70'",
    image: edenCard,
    link: "https://kbdlandcorp.in/eden-street"
  },
  {
    title: "Bridal Square",
    price: "₹7 - 7.5Cr",
    location: "Mohali, Chandigarh",
    projectArea: "6 Acre",
    plotSizes: "16' X 60' 16' X 70'",
    image: bridalCard,
    link: "https://kbdlandcorp.in/bridal-shopping-commercial"
  },
  {
    title: "Panipat Industrial Plots",
    price: "₹25,000 / sq.yd",
    location: "Panipat, Haryana",
    projectArea: "18.5 Acre",
    plotSizes: "612 – 1484 sq.yd",
    image: panipatCard,
    link: "https://panipatindustrialplots.com/"
  }
];

export default function FeaturedSection() {
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 20000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section className="featured py-5">
      <Container>
        <Row className="align-items-center section-header mb-5">
          <Col lg={8}>
            <h2 className="section-title">Explore Our Featured Projects</h2>

            <p className="section-subtitle">
              Discover premium residential, commercial, and investment
              opportunities across high-growth locations.
            </p>
          </Col>

          <Col lg={4} className="text-lg-end mt-3 mt-lg-0">
            <Link to="/properties" className="view-all-btn">
              Explore All Projects →
            </Link>
          </Col>
        </Row>

        <div className="featured-slider-wrapper">
          <Slider {...sliderSettings}>
            {properties.map((item, index) => (
              <div key={index} className="slider-item">
                <div className="px-2 h-100">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-100"
                  >
                    <Card className="property-card h-100 border-0 shadow-sm">
                      <div className="img-wrapper position-relative overflow-hidden">
                        <Card.Img src={item.image} alt={item.title} />
                        <div className="overlay"></div>
                        <div className="price-tag">{item.price}</div>
                      </div>

                      <Card.Body>
                        <h4 className="property-title">{item.title}</h4>

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

                        {item.link.startsWith("http") ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="details-btn"
                          >
                            View Details
                          </a>
                        ) : (
                          <Link to={item.link} className="details-btn">
                            View Details
                          </Link>
                        )}
                      </Card.Body>
                    </Card>
                  </motion.div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
}