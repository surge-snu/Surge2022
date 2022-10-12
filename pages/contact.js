import { useState } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import "../styles/routes/Contact.scss";

export default function Contact() {
  const core = [
    {
      image: "/Img/Team/OC/Tejaswini.jpg",
      name: "Tejaswini Satish",
      position: "Core",
      phone: "+91 8754017474",
      email: "ts658@snu.edu.in",
    },
  ];

  const poc = [...Array(9).keys()].fill(
    {
      image:
        "https://images.unsplash.com/photo-1664261910581-ac3334994d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name: "Santhosh",
      position: "Web Development Lead",
      phone: "+91 1234567890",
      email: "test@gmail.com",
    },
    0,
    9
  );

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
      </div>
      <div className="ContactPage__contacts">
        {(showCore ? core : poc).map((item, index) => (
          <div className="ContactPage__card" key={item["name"] + index}>
            <div className="ContactPage__card--top">
              <img alt={item["name"]} src={item["image"]} />
              <div className="ContactPage__cardDetails">
                <h3 className="ContactPage__cardDetails--name">
                  {item["name"]}
                </h3>
                <p className="ContactPage__cardDetails--position">
                  {item["position"]}
                </p>
              </div>
            </div>
            <div className="ContactPage__card--bottom">
              <div className="ContactPage__cardButton ContactPage__cardButton--green">
                <p>{item["phone"]}</p>
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

      <h4>Other members coming soon!</h4>
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
