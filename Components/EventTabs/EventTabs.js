import Link from "next/link";
import React from "react";
import "./EventTabs.scss";

function EventTabs({ eventId }) {
  const [activeTab, setActiveTab] = React.useState("overview");
  const [hoverTab, setHoverTab] = React.useState(null);

  React.useEffect(() => {
    const activeTabElem = document.getElementById(activeTab);
    const ghostTab = document.getElementById("ghost-tab");
    ghostTab.style.width = `${
      activeTabElem.parentElement.getBoundingClientRect().width
    }px`;
    ghostTab.style.left = `${activeTabElem.offsetLeft - 13}px`;
  }, [activeTab]);

  React.useEffect(() => {
    if (hoverTab) {
      const hoverTabElem = document.getElementById(hoverTab);
      const ghostTab = document.getElementById("hover-ghost-tab");
      ghostTab.style.opacity = "1";

      ghostTab.style.width = `${
        hoverTabElem.parentElement.getBoundingClientRect().width
      }px`;
      ghostTab.style.left = `${hoverTabElem.offsetLeft - 13}px`;
    } else {
      const ghostTab = document.getElementById("hover-ghost-tab");
      ghostTab.style.opacity = "0";
    }
  }, [hoverTab]);

  return (
    <ul className="EventTabs">
      <span className="EventTabs--ghostItem" id="ghost-tab" />
      <span className="EventTabs--ghostHoverItem" id="hover-ghost-tab" />
      <li
        className={`EventTabs--item ${
          activeTab === "overview" ? "EventTabs--activeItem" : ""
        }`}
        onClick={() => setActiveTab("overview")}
        onMouseEnter={() => setHoverTab("overview")}
        onMouseLeave={() => setHoverTab(null)}
      >
        <Link href={`/event/${eventId}/overview`}>
          <a id="overview">OVERVIEW</a>
        </Link>
      </li>
      <li
        className={`EventTabs--item ${
          activeTab === "schedule" ? "EventTabs--activeItem" : ""
        }`}
        onClick={() => setActiveTab("schedule")}
        onMouseEnter={() => setHoverTab("schedule")}
        onMouseLeave={() => setHoverTab(null)}
      >
        <Link href={`/event/${eventId}/schedule`}>
          <a id="schedule">SCHEDULE</a>
        </Link>
      </li>
      <li
        className={`EventTabs--item ${
          activeTab === "prizes" ? "EventTabs--activeItem" : ""
        }`}
        onClick={() => setActiveTab("prizes")}
        onMouseEnter={() => setHoverTab("prizes")}
        onMouseLeave={() => setHoverTab(null)}
      >
        <Link href={`/event/${eventId}/prizes`}>
          <a id="prizes">PRIZES</a>
        </Link>
      </li>
      <li
        className={`EventTabs--item ${
          activeTab === "team" ? "EventTabs--activeItem" : ""
        }`}
        onClick={() => setActiveTab("team")}
        onMouseEnter={() => setHoverTab("team")}
        onMouseLeave={() => setHoverTab(null)}
      >
        <Link href={`/event/${eventId}/team`}>
          <a id="team">TEAM</a>
        </Link>
      </li>
    </ul>
  );
}

export default EventTabs;
