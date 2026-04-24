import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function FloatingIcons() {
  return (
    <div className="floating-icons">

      {/* 📞 Call */}
      <a href="tel:+91-83959945524" className="float-btn call">
        <FaPhoneAlt />
      </a>

      {/* 💬 WhatsApp */}
      <a
        href="https://wa.me/+91-8448220334?text=Hi%20I%20am%20interested%20in%20site%20visit"
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn whatsapp"
      >
        <FaWhatsapp />
      </a>

    </div>
  );
}