import { Container } from "react-bootstrap";

import heroVideo from "../../assets/goa.mp4";

export default function HeroSection() {
  return (
    <div className="hero-video-section">

      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <Container className="hero-content text-center">

        <h1>Your Dream Plot Near Goa Awaits</h1>

        <p>
          Build your dream villa in a luxury coastal community surrounded by
          greenery and serenity.
        </p>

       
      </Container>

    </div>
  );
}