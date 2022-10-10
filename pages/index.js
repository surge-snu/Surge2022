import Renegade from "../Components/Renegade/Renegade";

import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Newsletter from "../Components/Newsletter/Newsletter";
import SportScroll from "../Components/SportScroll/SportScroll";
import Stats from "../Components/Stats/stats";
import "../styles/routes/Home.scss";
import Blogs from "../Components/Blogs/blogs";

export async function getServerSideProps(context) {
  return {
    props: {
      currentPath: context.req.url,
    },
  };
}
export default function Home() {
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
          loading="lazy"
          className="HeroSection__right"
          src="/Img/HeroImgRight.svg"
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
              <img loading="lazy" src="/Img/DownArrow.svg" />
              <p>11 12 13 November</p>
            </div> */}
						<p>11 12 13 November</p>
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
          <h1 className="AboutSection__above--title">
            THE{" "}
            <span>
              ANNUAL SPORTS <br />
              FEST{" "}
            </span>
						OF
						<br />
						SHIV NADAR 
            IOE
          </h1>

          <p className="AboutSection__above--text">
            Surge brings to all a platform to promote visibility, interaction,
            and dedication to sports. Our sports clubs get to not only increase
            their audience, but also nurture in everyone the spirit of
            competition, teamwork and sportsmanship. We endeavor to boost the
            zest for sports by bringing about a new era for sports, showcasing
            legendary clashes between the best and the brightest.
          </p>
          <a className="AboutSection__above--fancyLink" href="/team">
            MEET THE TEAM
          </a>
        </div>
        <div className="AboutSection__below">
          <img
            loading="lazy"
            className="AboutSection__below--image"
            src="/Img/football.svg"
          />
          <h1 className="AboutSection__below--title">ABOUT</h1>
        </div>
      </section>
      {/* <section className="RenegadeSection" id="events">
        <Renegade />
      </section> */}
			<section className="BlogsSection" id="stats">
				<Blogs />
			</section>
      <section className="StatsSection">
        <Stats />
      </section>
      <Newsletter />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <div className="LandingPage">
      <Header currentPath={page.props.currentPath} />
      {page}
      <Footer />
    </div>
  );
};
