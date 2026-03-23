import { Container, Row, Col } from "react-bootstrap";
import { Shield, Dumbbell, Trees, Flame } from "lucide-react";
import mainImg from "../../../assets/artistic-impression-one.png";

export default function ArtisticPremium() {
  return (
    <section className="artistic-premium">

      {/* 🔥 PARTICLES */}
      <div className="particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <Container>

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="title">
            Artistic Impression of Development
          </h2>
          <p className="sub">
            Experience the future lifestyle through our planned visuals.
          </p>
        </div>

        <Row className="align-items-center">

          {/* LEFT */}
          <Col lg={3}>
            <div className="side-card">
              <Shield className="icon" size={28} />
              <h5>Luxury Clubhouse</h5>
              <p>Relax and enjoy premium indoor spaces</p>
            </div>

            <div className="side-card mt-4">
              <Dumbbell className="icon" size={28} />
              <h5>Open Air Gym</h5>
              <p>Workout in fresh natural surroundings</p>
            </div>
          </Col>

          {/* CENTER */}
          <Col lg={6}>
            <div className="center-card">

              <img src={mainImg} alt="Artistic" />

              <div className="price-box">
                <h3>350 – 450</h3>
                <span>Sq. ft.</span>

                <ul>
                  <li>Fully developed plots</li>
                  <li>Clear title</li>
                  <li>Secure gated community</li>
                </ul>

                <button className="gold-btn">
                  Get Best Price
                </button>
              </div>

            </div>
          </Col>

          {/* RIGHT */}
          <Col lg={3}>
            <div className="side-card">
              <Trees className="icon" size={28} />
              <h5>Walking Trail</h5>
              <p>Enjoy scenic jogging pathways</p>
            </div>

            <div className="side-card mt-4">
              <Flame className="icon" size={28} />
              <h5>Spa & Wellness</h5>
              <p>Relax your mind and body</p>
            </div>
          </Col>

        </Row>

      </Container>
    </section>
  );
}