import { Helmet } from "react-helmet";
import HeroSection from "../components/sections/HeroSection";
import FeaturedSection from "../components/sections/FeaturedSection";
import WhyChoose from "../components/sections/WhyChoose";
import VideoSection from "../components/sections/VideoSection";
import InvestmentJourney from "../components/sections/InvestmentJourney";
import HowItWorks from "../components/sections/HowItWorks";
import InvestmentOpportunities from "../components/sections/InvestmentOpportunities";
import CtaBanner from "../components/sections/CtaBanner";
import FloatingIcons from "../components/sections/FloatingIcons";
export default function Home() {
  return (
    <>
   <Helmet>
  {/* BASIC SEO */}
  <title>BHL (Brickhill Landbase) | Premium Plots & Land Investment in India</title>

  <meta
    name="description"
    content="BHL (Brickhill Landbase) offers premium residential and commercial plots in India. Invest in verified properties with high ROI, prime locations, and secure documentation."
  />

  <meta
    name="keywords"
    content="BHL plots, land investment India, plots for sale India, real estate investment India, commercial plots India"
  />

  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="author" content="BHL" />

  {/* CANONICAL */}
  <link rel="canonical" href="https://www.brickhillandbase.com/" />

  {/* PERFORMANCE BOOST */}
  <link rel="preconnect" href="https://www.brickhillandbase.com" />

  {/* OPEN GRAPH */}
  <meta property="og:title" content="BHL | Premium Land Investment in India" />
  <meta property="og:description" content="High ROI plots with BHL. Verified & secure investments." />
  <meta property="og:image" content="https://www.brickhillandbase.com/og-image.jpg" />
  <meta property="og:url" content="https://www.brickhillandbase.com/" />
  <meta property="og:type" content="website" />

  {/* TWITTER */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="BHL | Premium Plot Investment" />
  <meta name="twitter:description" content="Invest in plots with BHL for high returns." />
  <meta name="twitter:image" content="https://www.brickhillandbase.com/og-image.jpg" />

  {/* LOCAL SEO */}
  <meta name="geo.region" content="IN-HR" />
  <meta name="geo.placename" content="Gurugram" />
  <meta name="geo.position" content="28.4595;77.0266" />
  <meta name="ICBM" content="28.4595, 77.0266" />

  {/* STRUCTURED DATA */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "BHL",
      "alternateName": "Brickhill Landbase",
      "url": "https://www.brickhillandbase.com",
      "logo": "https://www.brickhillandbase.com/logo.png",
      "telephone": "+91-83959945524",
      "areaServed": "IN",
      "priceRange": "$$",
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
    <div className="app-shell">
      <h1 style={{ display: "none" }}>
  BHL Premium Residential & Commercial Plots in India
</h1>
      <HeroSection />
       <WhyChoose />  
        <InvestmentJourney /> 
      <FeaturedSection />
      <VideoSection />
      <HowItWorks />  
       <CtaBanner />
      <InvestmentOpportunities />
      <FloatingIcons />
    </div>
    </>
  );
} 