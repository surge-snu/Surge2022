import Head from "next/head";
import Renegade from "../Components/Renegade/Renegade";

import Header from "../Components/Header/Header";
import SportScroll from "../Components/SportScroll/SportScroll";
import "../styles/routes/Home.scss";

export default function Home() {
  const handler = async () => {
    const data = await fetch("/api/notify-list?email=asd");
    console.log(data);
  };
  return (
    <>
      <Head>
        <title>Surge 2022</title>
        <meta name="description" content="Awesome website for Surge" />
        <link rel="icon" href="/favicon.ico" />
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
          <img className="HeroSection__right" src="/Img/HeroImgRight.svg" />
          <div className="HeroSection__top">
            <h1 className="HeroSection__top--heading">
              WE ARE THE
              <br />
              HOME OF
              <br />
              <span>CHAMPIONS</span>
            </h1>
            <p className="HeroSection__top--text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </p>
            <div className="HeroSection__top--actionContainer">
              <div className="HeroSection__top--action">
                <img src="/Img/DownArrow.svg" />
                <p>Scroll to Learn More</p>
              </div>
            </div>
          </div>
        </section>
        <SportScroll />
        <section className="AboutSection">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </p>
            <a className="AboutSection__above--fancyLink" href="/team">
              MEET THE TEAM
            </a>
          </div>
          <div className="AboutSection__below">
            <img
              className="AboutSection__below--image"
              src="/Img/football.svg"
            />
            <h1 className="AboutSection__below--title">ABOUT</h1>
          </div>
        </section>
        {/* <section className="RenegadeSection">
          <Renegade />
        </section> */}
      </div>
    </>
  );
}
