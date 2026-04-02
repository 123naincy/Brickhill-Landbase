import React, { useState } from "react";
import bg from "../../../assets/sindhudurg-hero-one.jpg";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwzzPV_sWoqRgg_OXfwQ415TyirXyY1LDybJ3NwomErofBYWdVFvxbY8h4Z7qp8yrTOyQ/exec";

const Hero = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    visit: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone) {
      setError("Name and Phone are required");
      return;
    }

    if (!formData.visit) {
      setError("Please select visit option");
      return;
    }

    try {
      setIsSubmitting(true);
      setError("");

      // ✅ Convert value to readable text
      const visitMap = {
        this_week: "Yes, this week",
        next_week: "Yes, next week",
        details: "Need more details first",
      };

      const form = new FormData();
      form.append("fullName", formData.fullName);
      form.append("email", formData.email);
      form.append("phone", formData.phone);
      form.append("visit", visitMap[formData.visit]); // ✅ readable value

      await fetch(SCRIPT_URL, {
        method: "POST",
        body: form,
      });

      setStatus("success");

      // ✅ reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        visit: "",
      });

    } catch (err) {
      setError("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="hero">

      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <div className="hero-container">
        <div className="hero-grid">

          {/* LEFT */}
          <div className="left">
            <h1>
             Premium Villa Plots in Sindhudurg<br />
              Own Your Space Near Goa
            </h1>

            <p>
              Discover thoughtfully planned plots crafted for peaceful living, smart investment, and future growth.
            </p>

            <div className="features">
              <span>📍 Prime Location</span>
              <span>📈 High ROI</span>
              <span>🏝 Near Beach</span>
            </div>

            <div className="buttons">
              <button className="btn-primary" onClick={() => (window.location.href = "./contact")}>
                Get Details
              </button>
              <button
                className="btn-secondary"
                onClick={() => (window.location.href = "tel:9311924486")}
              >
                Call Now
              </button>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="form-wrapper">
            <div className="form-card">

              <h3>Book Free Site Visit</h3>

              <form onSubmit={handleSubmit}>

                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />

                {/* SIMPLE RADIO */}
                <div className="radio-group">
                  <p className="radio-title">
                    Would you like to schedule a FREE site visit?
                  </p>

                  <label className="radio-item">
                    <input
                      type="radio"
                      name="visit"
                      value="this_week"
                      checked={formData.visit === "this_week"}
                      onChange={handleChange}
                    />
                    Yes, this week
                  </label>

                  <label className="radio-item">
                    <input
                      type="radio"
                      name="visit"
                      value="next_week"
                      checked={formData.visit === "next_week"}
                      onChange={handleChange}
                    />
                    Yes, next week
                  </label>

                  <label className="radio-item">
                    <input
                      type="radio"
                      name="visit"
                      value="details"
                      checked={formData.visit === "details"}
                      onChange={handleChange}
                    />
                    Need more details first
                  </label>
                </div>

                {status === "success" && (
                  <p className="success">Submitted successfully</p>
                )}

                {error && <p className="error">{error}</p>}

                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Book Now"}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;