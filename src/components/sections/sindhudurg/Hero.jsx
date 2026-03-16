import { Carousel, Container, Button, Modal, Form } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

import Hero_one from "../../../assets/sindhudurg-hero-one.jpg";
import Hero_two from "../../../assets/sindhudurg-hero-two.jpg";
import Hero_three from "../../../assets/sindhudurg-hero-three.jpg";

export default function Hero() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleClose = () => {
    if (!loading) setShow(false);
  };

  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formBody = new URLSearchParams({
        name: form.name,
        email: form.email,
        phone: form.phone
      });

      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbz_Fh_1OPbc-q7sxKoqGUIRdZ0RgbIFMVZOCqnx0-lX1cwITqlEIfmF-3qWOxmD64yFtg/exec",
        {
          method: "POST",
          body: formBody
        }
      );

      const text = await res.text();
      console.log("Raw response:", text);

      let data;
      try {
        data = JSON.parse(text);
      } catch {
        throw new Error("Invalid server response");
      }

      if (data.result === "success") {
        alert("Thank you! Brochure will download shortly.");

        setForm({
          name: "",
          email: "",
          phone: ""
        });

        setShow(false);

        const link = document.createElement("a");
        link.href = "/brochure.pdf";
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.click();
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Form submit error:", error);
      alert(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Carousel
        fade
        interval={4000}
        controls={false}
        indicators={true}
        pause={false}
      >
        <Carousel.Item>
          <div
            className="hero-slide"
            style={{ backgroundImage: `url(${Hero_one})` }}
          >
            <Container className="hero-content">
              <h1>
                Experience Coastal Luxury <br />
                <span>At Premium Residential Villa Plots</span>
              </h1>

              <p className="hero-text">
                Discover premium resort-style residential plots near Goa.
                Enjoy nature, tranquility, and luxury coastal living.
              </p>

              <div className="hero-buttons">
                <a href="tel:8395994524">
                  <Button className="btn-green">
                    Book Site Visit <FaArrowRight />
                  </Button>
                </a>

                <Button className="btn-glass" onClick={handleShow}>
                  Download Brochure
                </Button>
              </div>
            </Container>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div
            className="hero-slide"
            style={{ backgroundImage: `url(${Hero_two})` }}
          >
            <Container className="hero-content">
              <h1>
                Your Private Retreat <br />
                <span>Near Goa Beaches</span>
              </h1>

              <p className="hero-text">
                Premium resort-inspired plots surrounded by lush greenery
                and close to Goa&apos;s beautiful beaches.
              </p>

              <div className="hero-buttons">
                <a href="tel:8395994524">
                  <Button className="btn-green">
                    Book Site Visit <FaArrowRight />
                  </Button>
                </a>

                <Button className="btn-glass" onClick={handleShow}>
                  Download Brochure
                </Button>
              </div>
            </Container>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div
            className="hero-slide"
            style={{ backgroundImage: `url(${Hero_three})` }}
          >
            <Container className="hero-content">
              <h1>
                Invest In Coastal Living <br />
                <span>At Premium Residential Villa Plots</span>
              </h1>

              <p className="hero-text">
                Limited resort-style residential plots available in Sindhudurg,
                perfect for holiday homes and investment.
              </p>

              <div className="hero-buttons">
                <a href="tel:8395994524">
                  <Button className="btn-green">
                    Book Site Visit <FaArrowRight />
                  </Button>
                </a>

                <Button className="btn-glass" onClick={handleShow}>
                  Download Brochure
                </Button>
              </div>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>

      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton={!loading}>
          <Modal.Title>Download Brochure</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="name"
                value={form.name}
                placeholder="Full Name"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                name="email"
                value={form.email}
                placeholder="Email Address"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="tel"
                name="phone"
                value={form.phone}
                placeholder="Phone Number"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button
              className="btn-green w-100"
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit & Download Brochure"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}