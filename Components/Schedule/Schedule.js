import React from "react";
import "./Schedule.scss";

export default function Schedule() {
	return (
		<div className="SchedulePage">
			<div className="SchedulePage__heading">
				LOREM EPSIME TIMELINE
			</div>
			<div className="SchedulePage__slotList">
				{[...Array(10).keys()].map((i) => (
					<div className="SchedulePage__slot">
						<h3 className="SchedulePage__slot--title">Registration Starts</h3>
						<div className="SchedulePage__slot--content">
							<div className="SchedulePage__slot--date">
								<img src='/Img/calender2.svg' />
								<p>11th October 2022</p>
							</div>
							<div className="SchedulePage__slot--time">
								<img src='/Img/clock2.svg' />
								<p>12:00 AM</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}