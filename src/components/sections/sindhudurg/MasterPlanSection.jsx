import { Container } from "react-bootstrap";
import masterplan from "../../../assets/hero-slider-three.jpg";

export default function MasterPlanSection() {
  return (
    <section className="masterplan-section">
      <Container>

        <h2 className="section-title">Master Plan</h2>

        <img
          src={masterplan}
          alt="Premium Residential Villa Plots Master Plan"
          className="img-fluid mt-4"
        />

      </Container>
    </section>
  );
}