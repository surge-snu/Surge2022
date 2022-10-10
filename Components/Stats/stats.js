import "./stats.scss";

export default function Stats() {
	return (
		<>
			<div className="StatsSection__top">
				<h1 className="StatsSection__top--title">
					SCENE IN THE <span>GAME</span>
				</h1>
				{/* <p className="StatsSection__top--text">
					Lorem Epsime rafdrw e kdsd fdosm Lorem Epsime rafdrw e kdsd fdosm
				</p> */}
			</div>
			<div className="StatsSection__bottom--desktop">
				<div className="StatsSection__bottom--left">
					<div className="StatsSection__left--row">
						<img loading="lazy" src="/Img/circle.png" />
						<h2>EVENTS</h2>
					</div>
					<div className="StatsSection__left--row">
						<img loading="lazy" src="/Img/circle.png" />
						<h2>FACULTY</h2>
					</div>
					<div className="StatsSection__left--row">
						<img loading="lazy" src="/Img/circle.png" />
						<h2>SPORTS</h2>
					</div>
				</div>
				<div className="StatsSection__bottom--middle" />
				<div className="StatsSection__bottom--right">
					<div className="StatsSection__right--row">
						<div className="StatsSection__right--item">
							<h3>100+</h3>
							<span>EVENTS</span>
						</div>
						<div className="StatsSection__right--item">
							<h3>60+</h3>
							<span>HOSTED</span>
						</div>
						<div className="StatsSection__right--item">
							<h3>70+</h3>
							<span>WON</span>
						</div>
					</div>
					<div className="StatsSection__right--row">
						<div className="StatsSection__right--item">
							<h3>20+</h3>
							<span>MEMBERS</span>
						</div>
						<div className="StatsSection__right--item">
							<h3>30+</h3>
							<span>STAFFS</span>
						</div>
						<div className="StatsSection__right--item">
							<h3>20+</h3>
							<span>TRAINERS</span>
						</div>
					</div>
					<div className="StatsSection__right--row">
						<div className="StatsSection__right--item">
							<h3>100+</h3>
							<span>SPORTS</span>
						</div>
						<div className="StatsSection__right--item">
							<h3>&nbsp; &nbsp; &nbsp; ∞&nbsp; &nbsp; </h3>
							<span>SWEAT</span>
						</div>
						<div className="StatsSection__right--item">
							<h3>&nbsp; &nbsp; &nbsp; ∞&nbsp; &nbsp; </h3>
							<span>FUN</span>
						</div>
					</div>
				</div>
			</div>
			<div className="StatsSection__bottom--mobile">
				<div className="StatsSection__mobile--item">
					<h3>130+</h3>
					<span>EVENTS</span>
				</div>
				<div className="StatsSection__mobile--item">
					<h3>20+</h3>
					<span>FACULTY</span>
				</div>
				<div className="StatsSection__mobile--item">
					<h3>100+</h3>
					<span>SPORTS</span>
				</div>
			</div>
		</>
	);
}
