import Head from "next/head";
import Renegade from "../Components/Renegade/Renegade";

import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Newsletter from "../Components/Newsletter/Newsletter";
import SportScroll from "../Components/SportScroll/SportScroll";
import Stats from "../Components/Stats/stats";
import "../styles/routes/Home.scss";

export default function Home() {
	return (
		<>
			<Head>
				<title>Surge 2022</title>
				<meta name="description" content="Awesome website for Surge" />
				<link rel="icon" href="/Img/Sports icon.png" />
			</Head>
			<div className="LandingPage">
				<Header />
				<section className="HeroSection">
					<div
						className="HeroSection__left"
						style={{
							backgroundImage: `url("/Img/HeroImgLeft.svg")`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
						}}
					/>
					<img loading="lazy" className="HeroSection__right" src="/Img/HeroImgRight.svg" />
					<div className="HeroSection__top">
						<h1 className="HeroSection__top--heading">
							WE ARE THE
							<br />
							HOME OF
							<br />
							<span>CHAMPIONS</span>
						</h1>
						<p className="HeroSection__top--text">
							Whole-heartedly focused on the growing sports ambition on campus, everyone from legends to noobs will be a part of a week of fulfilled dreams in the form of tournaments, one-on-one battles, and exertion both physical and mental, as records are formed and broken.
						</p>
						<div className="HeroSection__top--actionContainer">
							<div className="HeroSection__top--action">
								<img loading="lazy" src="/Img/DownArrow.svg" />
								<p>Scroll to Learn More</p>
							</div>
						</div>
					</div>
				</section>
				<SportScroll />
				<section className="AboutSection" id="about">
					<div className="AboutSection__above">
						<h1 className="AboutSection__above--title">
							THE{" "}
							<span>
								ANUAL SPORTS <br />
								FEST{" "}
							</span>
							OF SHIV NADAR <br />
							UNIVERSITY
						</h1>

						<p className="AboutSection__above--text">
							Surge brings to all a platform to promote visibility, interaction, and dedication to sports. Our sports clubs get to not only increase their audience, but also nurture in everyone the spirit of competition, teamwork and sportsmanship. We endeavor to boost the zest for sports by bringing about a new era for sports, showcasing legendary clashes between the best and the brightest.
						</p>
						<a className="AboutSection__above--fancyLink" href="/team">
							MEET THE TEAM
						</a>
					</div>
					<div className="AboutSection__below">
						<img loading="lazy"
							className="AboutSection__below--image"
							src="/Img/football.svg"
						/>
						<h1 className="AboutSection__below--title">ABOUT</h1>
					</div>
				</section>
				<section className="RenegadeSection" id="events">
					<Renegade />
				</section>
				<section className="StatsSection">
					<Stats />
				</section>
				<Newsletter />
				<Footer />
			</div>
		</>
	);
}
