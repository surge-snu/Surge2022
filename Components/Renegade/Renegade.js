import React from "react";
import Image from "next/dist/client/image";
import RenegadeCard from "../RenegadeCard/RenegadeCard";

export default function Renegade() {
	
	return (
		<div className="Renegade">
			<h1 className="Renegade__title">Renegade</h1>
			<div className="Renegade__subtitleDiv">
				<h3 className="Renegade__subtitle">WE ARE THE
					<span className="Renegade__subtitle--green"> KING </span>
					IN</h3>
				<h3 className="Renegade__subtitle">EVERY GAME</h3>
			</div>
			<div className="Renegade__desc">
				<p className="Renegade__descText">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				</p>
			</div>
			<div className="Renegade__cards">
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
					<RenegadeCard key={i} />
				))}
			</div>
			<div className="Renegade__explore">
				<p>EXPLORE GALLERY</p>
				<div className="Renegade__rightArrow">
					<Image
						src="/RightArrow.svg"
						alt="Hero Image"
						layout="fill"
						objectFit="contain"
					/>
				</div>
			</div>
		</div>
	);
}