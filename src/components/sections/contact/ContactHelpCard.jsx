import React from "react";

function ContactHelpCard() {
  return (
    <div className="contact-help-box">
      <p className="help-small">Need Immediate Assistance?</p>
      <h3>Talk To Our Expert Team</h3>
      <p>
        Our advisors are available to answer your queries related to plots,
        pricing, amenities, and investment potential.
      </p>

      <a href="tel:+919876543210" className="contact-call-btn">
        Call Now
      </a>
    </div>
  );
}

export default ContactHelpCard;