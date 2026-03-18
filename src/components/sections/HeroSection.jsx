import heroVideo from "../../assets/goa.mp4";

export default function HeroSection() {
  return (
    <section className="hero-video-section">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>
    </section>
  );
}