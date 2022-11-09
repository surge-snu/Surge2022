import { useState } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import "../styles/routes/Contact.scss";
import details from "../public/json/Surge_team_details.json";
import Link from "next/link";

export default function Contact() {
  const core = details.filter((member) => member["team"] === "Core");
  const [showCore, setShowCore] = useState(true);

  return (
    <div className="ContactPage__container">
      <div className="ContactPage__container--top">
        <h1 className="ContactPage__title">
          GET IN <span>TOUCH</span> WITH US
          <br /> FOR <span>MORE</span> INFORMATION
        </h1>
        {/* <p className="ContactPage__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p> */}
      </div>
      <div className="ContactPage__tabs">
        <button
          className={`ContactPage__tab ${
            showCore ? "ContactPage__tab--active" : ""
          }`}
          onClick={() => setShowCore(true)}
        >
          CORE
        </button>
        <button
          className={`ContactPage__tab ContactPage__tab--inactive ${
            showCore ? "" : "ContactPage__tab--active"
          }`}
          disabled
          onClick={() => setShowCore(false)}
        >
          POC
        </button>
        <Link href="/team">
          <a
            className={`ContactPage__tab ContactPage__tab--link`}
            onClick={() => setShowCore(false)}
          >
            Team
          </a>
        </Link>
      </div>
      <div className="ContactPage__contacts">
        {core.map((item, index) => (
          <div className="ContactPage__card" key={item["name"] + index}>
            <div className="ContactPage__card--top">
              <img alt={item["name"]} src={item["file"]} />
              <div className="ContactPage__cardDetails">
                <h3 className="ContactPage__cardDetails--name">
                  {item["name"]}
                </h3>
                <p className="ContactPage__cardDetails--position">
                  {item["role"]}
                </p>
              </div>
            </div>
            <div className="ContactPage__card--bottom">
              <div className="ContactPage__cardButton ContactPage__cardButton--green">
                <p>{item["Phone number"]}</p>
                {/* <p>Place a call</p>
								<img
                  alt="Arrow right"
									src="/Img/arrow-right black.svg"
									width={20}
									height={20}
								/> */}
              </div>
              <div className="ContactPage__cardButton">
                <p>{item["email"]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <h4>Other members coming soon!</h4> */}
    </div>
  );
}

Contact.getLayout = function getLayout(page) {
  return (
    <div className="ContactPage">
      <Header currentPath={page.props.currentPath} />
      {page}
      <Footer />
    </div>
  );
};
