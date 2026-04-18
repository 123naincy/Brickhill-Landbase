import { Container, Button, Modal, Form } from "react-bootstrap";
import heroVideo from "../../assets/goa.mp4";
import { useState } from "react";

export default function HeroSection() {

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
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="hero">

      {/* Video */}
      <video className="hero__video" autoPlay muted loop playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero__overlay"></div>

      <Container className="hero__content text-center text-white">

        <h1 className="hero__title">
          PREMIUM RESIDENTIAL VILLA <br /> PLOTS NEAR GOA
        </h1>

        <p className="hero__subtitle">
         Discover premium resort-style residential plots near Goa, crafted for luxury living, holiday homes, and long-term coastal investment
        </p>

        <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">

          {/* ✅ Button */}
          <Button 
            variant="warning" 
            size="lg" 
            onClick={() => setShowForm(true)}
          >
            Book Site Visit
          </Button>

          {/* ✅ Modal */}
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

          {/* WhatsApp */}
          <Button 
            variant="outline-light" 
            size="lg" 
            onClick={() => window.open("https://wa.me/918383060833", "_blank")}
          >
            Enquire Now
          </Button>

        </div>
      </Container>
    </section>
  );
}