import { Helmet } from "react-helmet";
import Hero from "../components/sections/sindhudurg/Hero";
import Features from "../components/sections/sindhudurg/Features";
import Gallery from "../components/sections/sindhudurg/Gallery";
import Plots from "../components/sections/sindhudurg/Plots";
import Location from "../components/sections/sindhudurg/Location";
import Investment from "../components/sections/sindhudurg/Investment";
import Testimonials from "../components/sections/sindhudurg/Testimonals";
import Contact from "../components/sections/sindhudurg/Contact";
import ArtisticImpression from "../components/sections/sindhudurg/ArtisticImpression";

function Sindhudurg() {
  return (
    <>
      <Helmet>
        {/* TITLE */}
        <title>Plots in Sindhudurg | BHL Premium Land Investment Maharashtra</title>

        {/* DESCRIPTION */}
        <meta
          name="description"
          content="Buy premium plots in Sindhudurg with BHL (Brickhill Landbase). High ROI land investment in Maharashtra with clear titles and prime locations."
        />

        {/* KEYWORDS */}
        <meta
          name="keywords"
          content="plots in Sindhudurg, land investment Sindhudurg, plots Maharashtra, BHL plots Sindhudurg, property in Sindhudurg"
        />

        <meta name="robots" content="index, follow" />

        {/* CANONICAL */}
        <link rel="canonical" href="https://www.brickhillandbase.com/sindhudurg" />

        {/* OPEN GRAPH */}
        <meta property="og:title" content="BHL Sindhudurg Plots | Investment Opportunity" />
        <meta
          property="og:description"
          content="Explore premium land investment opportunities in Sindhudurg with BHL."
        />
        <meta property="og:url" content="https://www.brickhillandbase.com/sindhudurg" />
        <meta property="og:type" content="website" />

        {/* LOCATION SEO */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Sindhudurg, Maharashtra" />

        {/* STRUCTURED DATA 🔥 */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "BHL Sindhudurg Plots",
            "description": "Premium residential plots in Sindhudurg, Maharashtra with high ROI potential.",
            "brand": {
              "@type": "Brand",
              "name": "BHL"
            },
            "areaServed": "Sindhudurg, Maharashtra"
          }
          `}
        </script>
      </Helmet>

      {/* SEO H1 */}
      <h1 style={{ display: "none" }}>
        BHL Plots in Sindhudurg Maharashtra for Investment
      </h1>

      <Hero />
      <ArtisticImpression />
      <Features />
      <Plots />
      <Location />
      <Testimonials />
      <Gallery />
      <Contact />
    </>
  );
}

export default Sindhudurg;