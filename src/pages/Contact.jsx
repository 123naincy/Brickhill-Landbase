import { Helmet } from "react-helmet";
import AboutBreadcrumb from "../components/sections/contact/AboutBreadcrumb";
import ContactMainSection from "../components/sections/contact/ContactMainSection";
import ContactInfoCards from "../components/sections/contact/ContactInfoCards";

function Contact() {
  return (
    <>
      <Helmet>
        {/* TITLE */}
        <title>Contact BHL (Brickhill Landbase) | Land Investment Experts India</title>

        {/* DESCRIPTION */}
        <meta
          name="description"
          content="Contact BHL (Brickhill Landbase) for premium residential and commercial plots in India. Call +91 83959 945524 for expert guidance and investment opportunities."
        />

        {/* KEYWORDS */}
        <meta
          name="keywords"
          content="contact BHL, Brickhill Landbase contact, land investment India contact, plots inquiry India, real estate contact India"
        />

        <meta name="robots" content="index, follow" />

        {/* CANONICAL */}
        <link rel="canonical" href="https://www.brickhillandbase.com/contact" />

        {/* OPEN GRAPH */}
        <meta property="og:title" content="Contact BHL | Real Estate Experts" />
        <meta
          property="og:description"
          content="Get in touch with BHL for premium plot investment opportunities."
        />
        <meta property="og:url" content="https://www.brickhillandbase.com/contact" />
        <meta property="og:type" content="website" />

        {/* LOCAL BUSINESS SCHEMA 🔥 */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "BHL",
            "alternateName": "Brickhill Landbase",
            "telephone": "+91-83959945524",
            "email": "info@brickhillandbase.com",
            "areaServed": "IN",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Gurugram",
              "addressRegion": "Haryana",
              "addressCountry": "India"
            }
          }
          `}
        </script>
      </Helmet>

      {/* SEO H1 */}
      <h1 style={{ display: "none" }}>
        Contact BHL (Brickhill Landbase) for Land Investment in India
      </h1>

      <AboutBreadcrumb />

      <ContactInfoCards />
      <ContactMainSection />
    </>
  );
}

export default Contact;