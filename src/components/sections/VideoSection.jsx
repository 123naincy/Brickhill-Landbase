import { Container, Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import videoBg from "../../assets/hero-slider-three.jpg";

export default function VideoSection() {
  const [showVideo, setShowVideo] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [errors, setErrors] = useState({});

  // 🔹 Validation (same as contact)
  const validateField = (name, value) => {
    const v = value.trim();

    switch (name) {
      case "name":
        if (!v) return "Name is required";
        if (!/^[A-Za-z\s]+$/.test(v)) return "Only letters allowed";
        return "";

      case "email":
        if (!v) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))
          return "Invalid email";
        return "";

      case "phone":
        if (!v) return "Phone is required";
        if (!/^[6-9]\d{9}$/.test(v))
          return "Invalid mobile number";
        return "";

      default:
        return "";
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: validateField("name", form.name),
      email: validateField("email", form.email),
      phone: validateField("phone", form.phone)
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((e) => e);
  };

  // 🔹 Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value
    }));

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  // 🔹 Submit (same API as contact)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const formBody = new URLSearchParams({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        source: "Virtual Tour"
      });

      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxmiuTW58T1tmQqHYkK9D9n67AHOflAP5T2j18YwpA_1-B5ClBDGRGVrsZkjZt9Ye1eGg/exec",
        {
          method: "POST",
          body: formBody
        }
      );

      const text = await res.text();
      const data = JSON.parse(text);

      if (data.result === "success") {
        alert("Access Granted! 🎉");

        setForm({
          name: "",
          email: "",
          phone: ""
        });

        setErrors({});
        setShowForm(false);
        setShowVideo(true); // 👉 unlock video
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      alert("Something went wrong!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="video-section-clean">
      {/* Background */}
      <div
        className="video-bg"
        style={{ backgroundImage: `url(${videoBg})` }}
      ></div>

      <div className="video-overlay"></div>

      {/* Play Button */}
      <Container className="video-center-wrap text-center d-flex flex-column align-items-center justify-content-center">
        <div
          className="play-btn-clean mb-4"
          onClick={() => setShowForm(true)}
        >
          <span className="play-ripple ripple-1"></span>
          <span className="play-ripple ripple-2"></span>
          <span className="play-ripple ripple-3"></span>

          <div className="play-inner">
            <FaPlay />
          </div>
        </div>
        <div className="video-text">
          <h1 className="video-title">VIRTUAL SITE VISIT</h1>
          <h2 className="video-subtitle">BHL Arayana</h2>
        </div>
      </Container>

      {/* FORM MODAL */}
      <Modal show={showForm} onHide={() => setShowForm(false)} centered>
        <Modal.Body>
          <h4 className="text-center mb-3">Unlock Virtual Tour</h4>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                value={form.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.phone}
                maxLength={10}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" className="w-100" disabled={loading}>
              {loading ? "Submitting..." : "Submit & View"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* VIDEO MODAL */}
      <Modal
        show={showVideo}
        onHide={() => setShowVideo(false)}
        centered
        size="lg"
      >
        <Modal.Body className="p-0">
          {showVideo && (
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/H1oGY-7wI-4?autoplay=1"
              title="Virtual Tour"
              allow="autoplay"
              allowFullScreen
            />
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
}