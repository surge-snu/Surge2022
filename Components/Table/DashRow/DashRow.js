import React from "react";

import "./DashRow.scss";

function DashRow({
  dropdownIndex,
  setDropdownIndex,
  index,
  children,
  contentCols = [],
}) {
  return (
    <div className="DashRowWrapper">
      <button
        className="DashRowWrapper__button"
        onClick={() => {
          setDropdownIndex(dropdownIndex === index ? null : index);
        }}
      >
        <div
          className="DashRowWrapper__button--content"
          style={{
            gridTemplateColumns: `repeat(${contentCols.length}, 1fr)`,
          }}
        >
          {contentCols.map((col, i) => col)}
        </div>
        <img
          src="/Img/Arrow Right Variant.svg"
          className="DashRowWrapper__button--arrow"
          style={{
            transform:
              dropdownIndex === index ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease-in-out",
          }}
        />
      </button>
      <div
        className={`DashRowWrapper__content ${
          dropdownIndex === index ? "DashRowWrapper__content--active" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default DashRow;