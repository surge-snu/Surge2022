import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Newsletter from "../Components/Newsletter/Newsletter";
import SportScroll from "../Components/SportScroll/SportScroll";
import Stats from "../Components/Stats/stats";
import "../styles/routes/Home.scss";
import Blogs from "../Components/Blogs/blogs";
import Link from "next/link";

export async function getServerSideProps(context) {
  return {
    props: {
      currentPath: context.req.url,
    },
  };
}
export default function Home() {
	
	const [showVideo, setShowVideo] = React.useState(false);
	React.useEffect(() => {
		if (showVideo) {
			setTimeout(() => {
				document.querySelector(".AboutSection__below").style.position = "fixed";
				document.querySelector(".AboutSection__below").style.top = "0";
				document.querySelector(".AboutSection__below").style.left = "0";
				// document.querySelector(".AboutSection__below").classList.add("AboutSection__below--active");
				document.querySelector(".AboutSection__vid").play();
			}, 800);
		} else {
			// remove the position style
			document.querySelector(".AboutSection__below").style.position = "";
			document.querySelector(".AboutSection__below").style.top = "";
			document.querySelector(".AboutSection__below").style.left = "";
			// document.querySelector(".AboutSection__below").style.position = "relative";
			// document.querySelector(".AboutSection__below").classList.remove("AboutSection__below--active");
			document.querySelector(".AboutSection__vid").pause();
		}
		return () => {
			document.querySelector(".AboutSection__below").style.position = "";
			document.querySelector(".AboutSection__below").style.top = "";
			document.querySelector(".AboutSection__below").style.left = "";
			document.querySelector(".AboutSection__vid").pause();
		};
	}, [showVideo]);
	
  return (
    <>
      <section className="HeroSection">
        <div
          className="HeroSection__left"
          style={{
            backgroundImage: `url("/Img/HeroImgLeft.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <img
          alt="background image"
          loading="lazy"
          className="HeroSection__right"
          src="/Img/HeroImgRight.png"
        />
        <div className="HeroSection__top">
          <h1 className="HeroSection__top--heading">
            WE ARE THE
            <br />
            HOME OF
            <br />
            <span>CHAMPIONS</span>
          </h1>
          <p className="HeroSection__top--text">
            Whole-heartedly focused on the growing sports ambition on campus,
            everyone from legends to noobs will be a part of a week of fulfilled
            dreams in the form of tournaments, one-on-one battles, and exertion
            both physical and mental, as records are formed and broken.
          </p>
          <div className="HeroSection__top--actionContainer">
            {/* <div className="HeroSection__top--action">
              <img alt="down arrow" loading="lazy" src="/Img/DownArrow.svg" />
              <p>11 12 13 November</p>
            </div> */}
            {/* <p>11 12 13 November</p> */}
          </div>
          {/* <div className="HeroSection__top--date">
						<p>
							11 12 13<br />
							November
						</p>
					</div> */}
        </div>
      </section>
      <SportScroll />
      <section className="AboutSection" id="about">
				<div className="AboutSection__above">
					<h1 className="AboutSection__title">ABOUT</h1>
          <h1 className="AboutSection__subtitle">
            THE{" "}
            <span>
              ANNUAL SPORTS <br />
              FEST{" "}
            </span>
            OF
            <br />
            SHIV NADAR IOE
          </h1>

          <p className="AboutSection__text">
            Surge brings to all a platform to promote visibility, interaction,
            and dedication to sports. Our sports clubs get to not only increase
            their audience, but also nurture in everyone the spirit of
            competition, teamwork and sportsmanship. We endeavor to boost the
            zest for sports by bringing about a new era for sports, showcasing
            legendary clashes between the best and the brightest.
          </p>
          <Link href="/team">
            <a className="AboutSection__fancyLink">MEET THE TEAM</a>
          </Link>
        </div>
				<div className={`AboutSection__below
					${showVideo ? "AboutSection__below--showVideo" : ""}
				`}>
					<div className="AboutSection__belowContainer">
						<button
							className="AboutSection__playButton"
							onClick={() => setShowVideo(showVideo => !showVideo)}
						>
							<img
								alt="Play button"
								loading="lazy"
								className="AboutSection__image"
								src="/Img/Play button.svg"
								hidden={showVideo}
							/>
						</button>
						<button
							className="AboutSection__closeButton"
							onClick={() => setShowVideo(showVideo => !showVideo)}
							hidden={!showVideo}
						>X</button>
						<div className={`AboutSection__vidContainer
							${showVideo ? "AboutSection__vidContainer--showVideo" : ""}
						`}>
							<img
								alt="About image"
								loading="lazy"
								className="AboutSection__image AboutSection__image--video"
								src="/Img/About.svg"
								hidden={showVideo}
							/>
							<video
								loading="lazy"
								className="AboutSection__vid"
								controls controlsList="nodownload">
								<source src="/Vids/LaunchVid.MP4" type="video/mp4" />
							</video>
						</div>
					</div>
        </div>
      </section>
      {/* <section className="RenegadeSection" id="events">
        <Renegade />
      </section> */}
      <section className="StatsSection">
        <Stats />
      </section>
      <section className="BlogsSection" id="stats">
        <Blogs />
      </section>
      <Newsletter />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <div className="LandingPage">
      <Header currentPath="/" />
      {page}
      <Footer />
    </div>
  );
};
