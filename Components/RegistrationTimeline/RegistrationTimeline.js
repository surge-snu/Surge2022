import React from "react";
import "./RegistrationTimeline.scss";

function RegistrationTimeline({ tabs, currentTab }) {
  return (
    <div className="RegistrationTimelineWrapper">
      <div className="RegistrationTimelineWrapper__steps">
        {tabs.map((step, index) => (
          <div
            key={index}
            className={`RegistrationTimelineWrapper__steps--step 
              RegistrationTimelineWrapper__steps--${
                currentTab === step ? "current" : ""
              }`}
          >
            <span>{step}</span>
          </div>
        ))}
      </div>
      <div className="RegistrationTimelineWrapper__line" />
    </div>
  );
}

export default RegistrationTimeline;
