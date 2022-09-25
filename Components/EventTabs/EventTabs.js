import Link from "next/link";
import React from "react";
import "./EventTabs.scss";

function EventTabs({ eventId, currentTab }) {
  const [activeTab, setActiveTab] = React.useState(currentTab);
  const [hoverTab, setHoverTab] = React.useState(null);
  const [isDropDownOpen, setIsDropDownOpen] = React.useState(false);

  React.useEffect(() => {
    const activeTabElem = document.getElementById(activeTab);
    const ghostTab = document.getElementById("ghost-tab");
    ghostTab.style.width = `${
      activeTabElem.parentElement.getBoundingClientRect().width
    }px`;
    ghostTab.style.left = `${activeTabElem.parentElement.offsetLeft}px`;
  }, [activeTab]);

  React.useEffect(() => {
    if (hoverTab) {
      const hoverTabElem = document.getElementById(hoverTab);
      const ghostTab = document.getElementById("hover-ghost-tab");
      ghostTab.style.opacity = "1";

      ghostTab.style.width = `${
        hoverTabElem.parentElement.getBoundingClientRect().width
      }px`;
      ghostTab.style.left = `${hoverTabElem.parentElement.offsetLeft}px`;
    } else {
      const ghostTab = document.getElementById("hover-ghost-tab");
      ghostTab.style.opacity = "0";
    }
  }, [hoverTab]);

  React.useEffect(() => {
    const mobileDropDown = document.querySelector(".EventTabs--mobile");
    if (isDropDownOpen) {
      mobileDropDown.style.height = "50.5px";
    } else {
      mobileDropDown.style.height = "unset";
    }
  }, [isDropDownOpen]);

  return (
    <>
      <ul className="EventTabs--desktop">
        <span className="EventTabs--ghostItem" id="ghost-tab" />
        <span className="EventTabs--ghostHoverItem" id="hover-ghost-tab" />
        <li
          className={`EventTabs--item ${
            activeTab === "overview" ? "EventTabs--activeItem" : ""
          }`}
        >
          <Link href={`/event/${eventId}/overview`}>
            <a
              id="overview"
              onClick={() => setActiveTab("overview")}
              onMouseEnter={() => setHoverTab("overview")}
              onMouseLeave={() => setHoverTab(null)}
            >
              OVERVIEW
            </a>
          </Link>
        </li>
        <li
          className={`EventTabs--item ${
            activeTab === "schedule" ? "EventTabs--activeItem" : ""
          }`}
        >
          <Link href={`/event/${eventId}/schedule`}>
            <a
              id="schedule"
              onClick={() => setActiveTab("schedule")}
              onMouseEnter={() => setHoverTab("schedule")}
              onMouseLeave={() => setHoverTab(null)}
            >
              SCHEDULE
            </a>
          </Link>
        </li>
        <li
          className={`EventTabs--item ${
            activeTab === "prizes" ? "EventTabs--activeItem" : ""
          }`}
        >
          <Link href={`/event/${eventId}/prizes`}>
            <a
              id="prizes"
              onClick={() => setActiveTab("prizes")}
              onMouseEnter={() => setHoverTab("prizes")}
              onMouseLeave={() => setHoverTab(null)}
            >
              PRIZES
            </a>
          </Link>
        </li>
        <li
          className={`EventTabs--item ${
            activeTab === "team" ? "EventTabs--activeItem" : ""
          }`}
        >
          <Link href={`/event/${eventId}/team`}>
            <a
              id="team"
              onClick={() => setActiveTab("team")}
              onMouseEnter={() => setHoverTab("team")}
              onMouseLeave={() => setHoverTab(null)}
            >
              TEAM
            </a>
          </Link>
        </li>
      </ul>

      <ul className="EventTabs--mobile">
        {["overview", "schedule", "prizes", "team"]
          .filter((x) => x !== activeTab)
          .concat([activeTab])
          .reverse()
          .map((tab) => (
            <li
              className={`EventTabs--item ${
                activeTab === tab ? "EventTabs--activeItem" : ""
              }`}
            >
              <Link href={`/event/${eventId}/${tab}`}>
                <a
                  id={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setIsDropDownOpen(!isDropDownOpen);
                  }}
                >
                  {tab.toUpperCase()}
                </a>
              </Link>
            </li>
          ))}
        <button
          className={`EventTabs__dropDown ${
            isDropDownOpen ? "EventTabs__dropDown--rotate" : ""
          }`}
          onClick={() => setIsDropDownOpen(!isDropDownOpen)}
        >
          <img src="/Img/Arrow Right Variant.svg" height={20} width={20} />
        </button>
      </ul>
    </>
  );
}

export default EventTabs;
