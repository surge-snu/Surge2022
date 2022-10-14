import React from "react";

import "./DashRow.scss";

function DashRow({
  dropdownIndex,
  setDropdownIndex,
  index,
  children,
  contentCols = [],
  isColumn = true,
  isDropDown = true,
  colWidth = "1fr",
  style,
  parentStyle = {},
}) {
  return (
    <div className="DashRowWrapper">
      {isDropDown ? (
        <button
          className="DashRowWrapper__button"
          onClick={() => {
            setDropdownIndex(dropdownIndex === index ? null : index);
          }}
        >
          <div
            className="DashRowWrapper__button--content"
            style={{
              gridTemplateColumns: isColumn
                ? `repeat(${contentCols.length}, ${colWidth})`
                : "",
              gridTemplateRows: isColumn
                ? ""
                : `repeat(${contentCols.length}, auto)`,
              ...style,
            }}
          >
            {contentCols.map((col, i) => (
              <span key={i}>{col}</span>
            ))}
          </div>
          <img
            alt="right arrow"
            src="/Img/Arrow Right Variant.svg"
            className="DashRowWrapper__button--arrow"
            style={{
              transform:
                dropdownIndex === index ? "rotate(90deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease-in-out",
            }}
          />
        </button>
      ) : (
        <div className="DashRowWrapper__button" style={{ ...parentStyle }}>
          <div
            className="DashRowWrapper__button--content"
            style={{
              gridTemplateColumns: isColumn
                ? `repeat(${contentCols.length}, ${colWidth})`
                : "",
              gridTemplateRows: isColumn
                ? ""
                : `repeat(${contentCols.length}, auto)`,
              ...style,
            }}
          >
            {contentCols.map((col, i) => (
              <span key={i}>{col}</span>
            ))}
          </div>
        </div>
      )}
      <div
        className={`DashRowWrapper__content ${
          isDropDown && dropdownIndex === index
            ? "DashRowWrapper__content--active"
            : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default DashRow;
