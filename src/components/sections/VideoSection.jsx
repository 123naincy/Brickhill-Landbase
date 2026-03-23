import { Container, Modal } from "react-bootstrap";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import videoBg from "../../assets/hero-slider-three.jpg";

export default function VideoSection() {
  const [show, setShow] = useState(false);

  return (
    <section className="video-section-clean">
      <div
        className="video-bg"
        style={{ backgroundImage: `url(${videoBg})` }}
      ></div>

      <div className="video-overlay"></div>

      <Container className="video-center-wrap">
        <div
          className="play-btn-clean"
          onClick={() => setShow(true)}
          role="button"
          tabIndex={0}
          aria-label="Play project video"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setShow(true);
            }
          }}
        >
          <span className="play-ripple ripple-1"></span>
          <span className="play-ripple ripple-2"></span>
          <span className="play-ripple ripple-3"></span>

          <div className="play-inner">
            <FaPlay />
          </div>
        </div>
      </Container>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        size="lg"
        className="video-modal"
      >
        <Modal.Body className="p-0 position-relative">
          {show && (
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/H1oGY-7wI-4?si=L-e66hvR2ac4kGm9"
              title="Project Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
}