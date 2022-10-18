import React from "react";

import "./DashHeader.scss";

function DashHeader({
  headerTitles = [],
  isGreen = true,
  style,
  useClass = false,
  className,
  isTitle = true,
}) {
  const compStyle = {
    gridTemplateColumns: `repeat(${headerTitles.length}, 1fr)`,
  };

  // if (useClass) {
  //   delete compStyle.gridTemplateColumns;
  // }

  return (
    <div
      className={`DashHeaderWrapper ${className} 
      ${isGreen ? "DashHeaderWrapper--green" : ""}
      ${isTitle ? "DashHeaderWrapper--title" : ""}
      `}
      style={{
        ...compStyle,
        ...style,
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
