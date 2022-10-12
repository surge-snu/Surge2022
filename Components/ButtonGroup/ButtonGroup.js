import { useEffect, useState } from "react";
import "./ButtonGroup.scss";

function ButtonGroup({ onFilterChange = () => {} }) {
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    onFilterChange(activeFilter);
  }, [activeFilter]);

  return (
    <div className="ButtonGroupWrapper">
      <button
        className={`ButtonGroupWrapper__button ${
          activeFilter === "all" ? "active" : ""
        }`}
        onClick={() => setActiveFilter("all")}
      >
        All
      </button>
      <button
        className={`ButtonGroupWrapper__button ${
          activeFilter === "male" ? "active" : ""
        }`}
        onClick={() => setActiveFilter("male")}
      >
        Male
      </button>
      <button
        className={`ButtonGroupWrapper__button ${
          activeFilter === "female" ? "active" : ""
        }`}
        onClick={() => setActiveFilter("female")}
      >
        Female
      </button>
      <button
        className={`ButtonGroupWrapper__button ${
          activeFilter === "mixed" ? "active" : ""
        }`}
        onClick={() => setActiveFilter("mixed")}
      >
        Mixed
      </button>
    </div>
  );
}

export default ButtonGroup;
