import React from "react";
import "./SportScroll.scss";

export default function SportScroll() {
  const sports = [
    "Volleyball",
    "Football",
    "Cricket",
    "Basketball",
    "Tennis",
    "Badminton",
    "Table Tennis",
    "Squash",
    "Chess",
  ];

  return (
    <div className="slider">
      <div className="slider__track">
        {sports.concat(sports).map((sport, index) => (
          <div className="slider__track--item" key={index}>	
            <h1
              className={
                (index % 2 === 0 && index < 9) ||
                (index % 2 === 1 && index >= 9)
                  ? "slider__track--type1"
                  : "slider__track--type2"
              }
            >
              {sport}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
