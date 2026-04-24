import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    const trimmedValue = value.trim();

    switch (name) {
      case "name":
        if (!trimmedValue) return "Full name is required";
        if (trimmedValue.length < 3) return "Name must be at least 3 characters";
        if (!/^[A-Za-z\s]+$/.test(trimmedValue)) return "Name can contain only letters and spaces";
        return "";

      case "email":
        if (!trimmedValue) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) return "Enter a valid email address";
        return "";

      case "phone":
        if (!trimmedValue) return "Phone number is required";
        if (!/^[6-9]\d{9}$/.test(trimmedValue)) return "Enter a valid 10-digit mobile number";
        return "";

      case "message":
        if (!trimmedValue) return "Message is required";
        if (trimmedValue.length < 10) return "Message must be at least 10 characters";
        if (trimmedValue.length > 500) return "Message cannot exceed 500 characters";
        return "";

      default:
        return "";
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: validateField("name", form.name),
      email: validateField("email", form.email),
      phone: validateField("phone", form.phone),
      message: validateField("message", form.message)
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: ""
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const formBody = new URLSearchParams({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        message: form.message.trim(),
        source: "Contact Page"
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
        alert("Message sent successfully!");

        setForm({
          name: "",
          email: "",
          phone: "",
          message: ""
        });

        setErrors({});
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      alert(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <Container>
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h2 className="display-4 fw-bold mb-3">Get in Touch</h2>
          <p className="text-muted">Start your journey to paradise today</p>
        </motion.div>

        <Row className="g-5 align-items-stretch">
          <Col lg={6}>
            <motion.div
              className="contact-info h-100"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="mb-4 fw-bold">Contact Information</h3>

              <div className="contact-item">
                <Phone size={24} />
                <div>
                  <small>Phone</small>
                  <p>+91-83959945524</p>
                </div>
              </div>

              <div className="contact-item">
                <Mail size={24} />
                <div>
                  <small>Email</small>
                  <p>info@goaresortplots.com</p>
                </div>
              </div>

              <div className="contact-item">
                <MapPin size={24} />
                <div>
                  <small>Location</small>
                  <p>Nirvade, Sindhudurg, Maharashtra</p>
                </div>
              </div>

              <div className="visit-box">
                <h5>Visit Our Site Office</h5>
                <p>
                  Open daily from 9 AM to 6 PM. Schedule a tour and experience the
                  lifestyle firsthand.
                </p>
              </div>
            </motion.div>
          </Col>

          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Form className="contact-form" onSubmit={handleSubmit} noValidate>
                <Form.Group className="mb-4">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your name"
                    isInvalid={!!errors.name}
                    maxLength={50}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="your.email@example.com"
                    isInvalid={!!errors.email}
                    maxLength={100}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="9311924486"
                    isInvalid={!!errors.phone}
                    inputMode="numeric"
                    maxLength={10}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.phone}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tell us about your requirements..."
                    isInvalid={!!errors.message}
                    maxLength={500}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                  <div className="text-end mt-1 small text-muted">
                    {form.message.length}/500
                  </div>
                </Form.Group>

                <Button className="send-btn w-100" type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"} <Send size={18} />
                </Button>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}