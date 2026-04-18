import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
import bg from "../../assets/beautiful-landscape-cityscape-hua-hin-city-around-sea-ocean-bay.jpg";

const points = [
  "Free site visit & expert consultation",
  "100% verified legal documentation",
  "Flexible & investor friendly payment plans",
  "Complete post-purchase assistance"
];

export default function LuxuryInvestment() {

  // ✅ States
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [errors, setErrors] = useState({});

  // ✅ Validation
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

  // ✅ Handle Change
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

  // ✅ Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const formBody = new URLSearchParams({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        source: "Site Visit"
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
        alert("Site Visit Booked! 🎉");

        setForm({ name: "", email: "", phone: "" });
        setErrors({});
        setShowForm(false);
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
    <section
      className="luxury-investment"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="overlay"></div>

      <Container>
        <Row className="align-items-center g-5">

          {/* LEFT */}
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >

              <h2 className="luxury-title">
                Invest in Premium <span>Land Opportunities</span>
              </h2>

              <p className="luxury-desc">
                Brickhill Landbase helps you secure premium land investments
                with transparent documentation, expert guidance,
                and long-term value growth.
              </p>

              <div className="luxury-points">
                {points.map((item, index) => (
                  <div key={index} className="luxury-point">
                    <FaCheckCircle />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="warning"
                size="lg"
                onClick={() => setShowForm(true)}
              >
                Book Free Site Visit
              </Button>

            </motion.div>
          </Col>

          {/* RIGHT */}
          <Col lg={6}>
            <div className="stats-wrapper">

              <motion.div className="stat-card">
                <h3><CountUp end={500} duration={3} />+</h3>
                <p>Happy Investors</p>
              </motion.div>

              <motion.div className="stat-card">
                <h3><CountUp end={80} duration={3} />+</h3>
                <p>Acres Developed</p>
              </motion.div>

              <motion.div className="stat-card">
                <h3><CountUp end={25} duration={3} />%</h3>
                <p>Average ROI</p>
              </motion.div>

            </div>
          </Col>

        </Row>
      </Container>

      {/* ✅ MODAL (outside columns) */}
      <Modal show={showForm} onHide={() => setShowForm(false)} centered>
        <Modal.Body>

          <h4 className="text-center mb-3">Book Site Visit</h4>

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
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" className="w-100" disabled={loading}>
              {loading ? "Submitting..." : "Book Now"}
            </Button>

          </Form>
        </Modal.Body>
      </Modal>

    </section>
  );
}