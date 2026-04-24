import { Helmet } from "react-helmet";
import EventBreadcrumb from "../components/sections/event/EventBreadcrumb";
import EventsSection from "../components/sections/event/EventSections";

export default function Events() {
  return (
    <>
      <Helmet>
        {/* TITLE */}
        <title>BHL Events & Site Visits | Real Estate Events in India</title>

        {/* DESCRIPTION */}
        <meta
          name="description"
          content="Explore BHL (Brickhill Landbase) events, site visits, and real estate investment opportunities across India. Join us to discover premium plots and investment options."
        />

        {/* KEYWORDS */}
        <meta
          name="keywords"
          content="BHL events, real estate events India, site visits plots India, property events India, land investment seminars"
        />

        <meta name="robots" content="index, follow" />

        {/* CANONICAL */}
        <link rel="canonical" href="https://www.brickhillandbase.com/events" />

        {/* OPEN GRAPH */}
        <meta property="og:title" content="BHL Events & Site Visits" />
        <meta
          property="og:description"
          content="Join BHL events to explore premium land investment opportunities."
        />
        <meta property="og:url" content="https://www.brickhillandbase.com/events" />
        <meta property="og:type" content="website" />

        {/* STRUCTURED DATA (EVENT SCHEMA 🔥) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "BHL Property Investment Event",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "eventStatus": "https://schema.org/EventScheduled",
            "organizer": {
              "@type": "Organization",
              "name": "BHL",
              "url": "https://www.brickhillandbase.com"
            }
          }
          `}
        </script>
      </Helmet>

      {/* SEO H1 */}
      <h1 style={{ display: "none" }}>
        BHL Events and Site Visits for Land Investment in India
      </h1>

      <EventBreadcrumb />
      <EventsSection />
    </>
  );
}