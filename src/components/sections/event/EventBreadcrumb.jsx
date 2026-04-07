import Breadcrumb from "react-bootstrap/Breadcrumb";


function EventBreadcrumb() {
  return (
    <section className="about-hero">
      <div className="about-hero-overlay"></div>
      <div className="about-hero-glow about-hero-glow-left"></div>
      <div className="about-hero-glow about-hero-glow-right"></div>

      <div className="about-hero-pattern">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="about-hero-content">
        <p className="about-hero-label">PREMIUM COASTAL LIVING</p>

        <h1 className="about-hero-title">
          Our <span>Events</span>
        </h1>

        <p className="about-hero-text">
          Crafted for refined living, inspired by the elegance of coastal luxury.
        </p>

        <div className="about-breadcrumb-box">
          <Breadcrumb className="about-breadcrumb">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/events">Events</Breadcrumb.Item>
            <Breadcrumb.Item active>Upcoming Events</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
    </section>
  );
}

export default EventBreadcrumb;