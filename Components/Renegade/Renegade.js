import React from "react";
import RenegadeCard from "../RenegadeCard/RenegadeCard";
import "./Renegade.scss";

export default function Renegade() {
	const cards = [
		{
			id: 1,
			title: "Valorant",
			date: "8-11 April 2021",
			imageLink: "/Img/Valorant.png",
			info: "Standard 5v5"
		},
		{
			id: 2,
			title: "COD: MOBILE",
			date: "8-11 April 2021",
			imageLink: "/Img/COD.png",
			info: "Search & Destroy"
		},
		{
			id: 3,
			title: "ROCKET LEAGUE",
			date: "8-11 April 2021",
			imageLink: "/Img/Rocket-League.png",
			info: "Standard 3v3"
		},
		{
			id: 4,
			title: "CLASH ROYALE",
			date: "8-11 April 2021",
			imageLink: "/Img/Clash-Royale.png",
			info: "2v2 Friendly"
		},
		{
			id: 5,
			title: "CHESS",
			date: "9-11 April 2021",
			imageLink: "/Img/Chess.png",
			info: "Swiss Tournament Format"
		},
		{
			id: 6,
			title: "WIKI GAME",
			date: "8-11 April 2021",
			imageLink: "/Img/wiki.png",
			info: "Prize pool: ₹500"
		},
		{
			id: 7,
			title: "TAMBOLA",
			date: "8-11 April 2021",
			imageLink: "/Img/Tambola.svg",
			info: "Informal Game"
		},
	];

	return (
		<div className="Renegade">
			<div className="Renegade__top">
				<h2 className="Renegade__top--outlineTitle">Renegade</h2>
				<h2 className="Renegade__top--title">
					WE ARE THE<span> KING</span> IN EVERY GAME
				</h2>
			</div>
			<p className="Renegade__middle">
				The eSports tournament of Shiv Nadar IoE took place in 2021 conducted by Surge. Amidst the COVID-19 pandemic, the students of SNU organized one of the best college level eSports competitions in the country in collaboration with Nexus, the gaming society of SNU.
			</p>
			<div className="Renegade__cards">
				{cards.map((card) => (
					<RenegadeCard
						key={card.id}
						title={card.title}
						date={card.date}
						imageLink={card.imageLink}
						info={card.info}
					/>
				))}
			</div>
			{/* <div className="Renegade__bottom">
				<p>EXPLORE GALLERY</p>
				<img alt="right arrow" loading="lazy" className="Renegade__bottom--arrow" src="/Img/RightArrow.svg" />
			</div> */}
		</div>
	);
}
