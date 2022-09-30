import React from "react";

import "./DashHeader.scss";

function DashHeader({ headerTitles = [] }, isGreen = true) {
  return (
    <div
      className={`DashHeaderWrapper ${
        isGreen ? "DashHeaderWrapper--green" : ""
      }`}
      style={{
        gridTemplateColumns: `repeat(${headerTitles.length}, 1fr)`,
      }}
    >
      {headerTitles.map((title, index) => (
        <span key={index} className="DashHeaderWrapper__title">
          {title}
        </span>
      ))}
    </div>
  );
}
export default DashHeader;
