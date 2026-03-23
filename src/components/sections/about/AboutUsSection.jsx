import { Container, Row, Col } from "react-bootstrap";


import mainImg from "../../../assets/hero-slider-three.jpg";
import topImgOne from "../../../assets/hero-slider-three.jpg";
import topImgTwo from "../../../assets/hero-slider-three.jpg";
import user1 from "../../../assets/hero-slider-three.jpg";
import user2 from "../../../assets/hero-slider-three.jpg";
import user3 from "../../../assets/hero-slider-three.jpg";

function AboutUsSection() {
  const stats = [
    { number: "45+", label: "Premium Plots" },
    { number: "6.2", label: "Acres of Development" },
    { number: "24/7", label: "Secure Living" },
    { number: "100%", label: "Coastal Lifestyle" },
  ];

  return (
    <section className="about-us-section">
      <div className="about-us-glow about-us-glow-left"></div>
      <div className="about-us-glow about-us-glow-right"></div>

      <Container>
        <Row className="g-5 align-items-center">
          <Col lg={6}>
            <div className="about-left-content">
              <div className="section-mini-tag">
                <span></span>
                OUR STORY
              </div>

              <h2 className="about-main-title">
                Crafting Premium Coastal Living With
                <span> Timeless Elegance</span>
              </h2>

              <p className="about-description left-description">
                We design refined spaces that bring together natural beauty,
                thoughtful planning, and elevated lifestyle experiences. Every
                detail is curated to create a destination that feels exclusive,
                peaceful, and truly valuable.
              </p>

              <div className="about-main-image">
                <img src={mainImg} alt="Luxury lifestyle community" />
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="about-right-content">
              <div className="about-top-cards">
                <div className="mini-image-card">
                  <img src={topImgOne} alt="Premium planning" />
                  <div className="mini-badges">
                    <span>Luxury Living</span>
                    <span>Planning</span>
                  </div>
                </div>

                <div className="mini-image-card">
                  <img src={topImgTwo} alt="Coastal destination" />
                  <div className="mini-badges">
                    <span>Coastal</span>
                    <span>Lifestyle</span>
                  </div>
                </div>
              </div>

              <p className="about-description">
                Inspired by the charm of Goa and crafted with modern
                sophistication, our vision is to build a premium community where
                comfort, connectivity, and luxury come together seamlessly.
              </p>

              <div className="about-stats-grid">
                {stats.map((item, index) => (
                  <div className="stat-box" key={index}>
                    <h3>{item.number}</h3>
                    <p>{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="about-bottom-action">
                <div className="client-group">
                  <img src={user1} alt="Resident one" />
                  <img src={user2} alt="Resident two" />
                  <img src={user3} alt="Resident three" />
                </div>

                <div className="watch-intro">
                  <button type="button" className="play-btn">
                    <span>▶</span>
                  </button>
                  <p>DISCOVER MORE</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutUsSection;