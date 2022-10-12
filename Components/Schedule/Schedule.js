import React from "react";
import "./Schedule.scss";

export default function Schedule({ data }) {
  return (
    <div className="SchedulePage">
      <div className="SchedulePage__slotList">
        {Object.keys(data).map((item) => (
          <div className="SchedulePage__slot">
            <h3 className="SchedulePage__slot--title">{item}</h3>
            <div className="SchedulePage__slot--content">
              <div className="SchedulePage__slot--date">
                <img alt="Calender" src="/Img/calender2.svg" />
                <p>{data[item]}</p>
              </div>
              {/* <div className="SchedulePage__slot--time">
                <img alt="Clock" src="/Img/clock2.svg" />
                <p>12:00 AM</p>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
