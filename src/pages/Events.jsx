import Breadcrumb from "../components/sections/event/EventBreadcrumb";
import EventsSection from "../components/sections/event/EventSections";

export default function Events() {
  return (
    <>
      <Breadcrumb
        title="Events & Experiences"
        paths={[
          { name: "Home", link: "/" },
          { name: "Events" }
        ]}
      />
      <EventsSection />
    </>
  );
}