import React from "react";
import RenegadeCard from "../RenegadeCard/RenegadeCard";

export default function Renegade() {
	
	return (
		<div className="Renegade">
			{/* <h1 className="Renegade__title">Renegade</h1>
			<div className="Renegade__subtitleDiv">
				<h3 className="Renegade__subtitle">WE ARE THE
					<span className="Renegade__subtitle--green"> KING </span>
					IN</h3>
				<h3 className="Renegade__subtitle">EVERY GAME</h3>
			</div> */}
			<div className="Renegade__cards">
				{[1, 2, 3].map(i => (
					<RenegadeCard key={i} />
				))}
			</div>
		</div>
	);
}