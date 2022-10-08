import React from "react";
import "./DashTable.scss";

function DashTable({ title, children }) {
  return (
    <div className="DashTableWrapper">
      {title && <div className="DashTableWrapper__title">{title}</div>}
      {children}
    </div>
  );
}

export default DashTable;
