import React from "react";
import "./RenegadeCard.scss";

export default function RenegadeCard({
	title = "BATTLE MAGNITE",
	date = "8-11 April 2021",
	imageLink = "",
	info = "",
}) {
	return (
		<div className="RenegadeCard">
			<div className="RenegadeCard__top">
				<div className="RenegadeCard__top--left"></div>
				<div className="RenegadeCard__top--middle" style={{
					backgroundImage: `url(${imageLink})`,
					backgroundSize: "contain",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat"
				}}></div>
				<div className="RenegadeCard__top--right">
					<span>10/10</span>
					<span>BATTLE SNU</span>
				</div>
			</div>
			<div className="RenegadeCard__bottom">
				{/* <div className="RenegadeCard__bottom--teams">
          SNU <span>VS</span> AMITY
        </div> */}
				<div className="RenegadeCard__bottom--eventTitle">{title}</div>
				<div className="RenegadeCard__bottom--info">
					<div className="RenegadeCard__bottom--eventInfo">{info}</div>
					<div className="RenegadeCard__bottom--timeline">{date}</div>
				</div>
			</div>
		</div>
	);
}
