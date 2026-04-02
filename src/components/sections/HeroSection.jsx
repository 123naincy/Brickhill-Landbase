import { Container } from "react-bootstrap";
import heroVideo from "../../assets/goa.mp4";

export default function HeroSection() {
  return (
    <section className="hero">

      {/* Video */}
      <video className="hero__video" autoPlay muted loop playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="hero__overlay"></div>

      {/* Content */}
      <Container className="hero__content text-center text-white">

        <h1 className="hero__title">
          PREMIUM RESIDENTIAL VILLA <br /> PLOTS NEAR GOA
        </h1>

        <p className="hero__subtitle">
          Discover premium resort-style residential plots near Goa,
          crafted for luxury living, holiday homes, and long-term coastal investment
        </p>

      </Container>

    </section>
  );
}