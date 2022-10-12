import React from "react";
import "./CartRow.scss";

function CartRow({
  dropdownIndex,
  setDropdownIndex,
  index,
  children,
  contentCols = [],
  isColumn = true,
  isDropDown = true,
  colWidth = "1fr",
  style,
}) {
  return (
    <div className="CartRowWrapper">
      <div className="CartRowWrapper__button">
        <div className="CartRowWrapper__button--content">
          {contentCols.map((col, i) => (
            <span key={i}>{col}</span>
          ))}
        </div>
      </div>
      <hr />
      <div className={`CartRowWrapper__content`}>{children}</div>
    </div>
  );
}

export default CartRow;
