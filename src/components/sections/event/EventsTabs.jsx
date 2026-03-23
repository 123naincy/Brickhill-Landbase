import React from "react";

function EventsTabs({ activeTab, setActiveTab }) {
  return (
    <div className="events-tabs">
      <button
        className={activeTab === "upcoming" ? "active" : ""}
        onClick={() => setActiveTab("upcoming")}
      >
        Upcoming Events
      </button>

      <button
        className={activeTab === "completed" ? "active" : ""}
        onClick={() => setActiveTab("completed")}
      >
        Completed Events
      </button>
    </div>
  );
}

export default EventsTabs;