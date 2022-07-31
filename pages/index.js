import Head from "next/head";
import Image from "next/image";
import Renegade from "../components/Renegade/Renegade";

import Header from "../Components/Header/Header";
import SportScroll from "../Components/SportScroll/SportScroll";
import "../styles/routes/Home.scss";
 
export default function Home() {
  const handler = async () => {
    const data = await fetch("/api/notify-list?email=asd");
    console.log(data);
  };
  return (
    <div className="LandingPage">
      <Head>
        <title>Surge 2022</title>
        <meta name="description" content="Awesome website for Surge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

			<section className="HeroSection">
				<div className="HeroSection__background">
					<Image
						src="/LandingBackground.svg"
						alt="Background Image"
						layout="fill"
						objectFit="cover"
					/>
				</div>
				<div className="HeroSection__image">
					<div className="HeroSection__imageOverlay" />
					<Image
						src="/crop-legs-kicking-ball-smoke.svg"
						alt="Hero Image"
						layout="fill"
						objectFit="cover"
						objectPosition={"Right"}
					/>
				</div>
				<div className="HeroSection__scrollButtonDiv">
					<div className="HeroSection__scrollButtonImage">
						<Image
							src="/DownArrow.svg"
							alt="Hero Image"
							layout="fill"
							objectFit="contain"
						/>
					</div>
					<p>Scroll to Learn More</p>
				</div>
				<div className="HeroSection__right">
					<div className="HeroSection__title">
						<h1 className="HeroSection__titleText">WE ARE THE</h1>
						<h1 className="HeroSection__titleText">HOME OF</h1>
						<h1 className="HeroSection__titleText HeroSection__titleText--green">CHAMPIONS</h1>
					</div>
					<div className="HeroSection__description">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						</p>
					</div>
				</div>
			</section>
			<section className="RenegadeSection">
				<Renegade />
			</section>
    </div>
  );
}
