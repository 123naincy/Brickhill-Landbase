import { Helmet } from "react-helmet";
import AboutBreadcrumb from "../components/sections/about/AboutBreadcrumb";
import AboutUsSection from "../components/sections/about/AboutUsSection";
import StoryTimeline from "../components/sections/about/StoryTimeline";
import VisionMission from "../components/sections/about/VisionMission";

function About() {
  return (
    <>
      <Helmet>
        {/* TITLE */}
        <title>About BHL (Brickhill Landbase) | Trusted Real Estate Company in India</title>

        {/* DESCRIPTION */}
        <meta
          name="description"
          content="Learn about BHL (Brickhill Landbase), a trusted real estate company offering premium residential and commercial plots across India with verified documentation and high ROI."
        />

        {/* KEYWORDS */}
        <meta
          name="keywords"
          content="About BHL, Brickhill Landbase company, real estate company India, land investment company India, BHL plots"
        />

        <meta name="robots" content="index, follow" />

        {/* CANONICAL */}
        <link rel="canonical" href="https://www.brickhillandbase.com/about" />

        {/* OPEN GRAPH */}
        <meta property="og:title" content="About BHL | Trusted Land Investment Company" />
        <meta
          property="og:description"
          content="Discover the story, mission, and vision of BHL (Brickhill Landbase)."
        />
        <meta property="og:url" content="https://www.brickhillandbase.com/about" />
        <meta property="og:type" content="website" />

        {/* STRUCTURED DATA */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "BHL",
            "alternateName": "Brickhill Landbase",
            "url": "https://www.brickhillandbase.com",
            "logo": "https://www.brickhillandbase.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-83959945524",
              "contactType": "customer service",
              "areaServed": "IN"
            }
          }
          `}
        </script>
      </Helmet>

      {/* H1 FOR SEO */}
      <h1 style={{ display: "none" }}>
        About BHL (Brickhill Landbase) Real Estate Company in India
      </h1>

      <AboutBreadcrumb />
      <AboutUsSection />
      <VisionMission />
      <StoryTimeline />
    </>
  );
}

export default About;