import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import "../styles/routes/Contact.scss";

export default function Contact() {
  const contact = [
    {
      image: "/Img/Team/OC/Tejaswini.jpg",
      name: "Tejaswini Satish",
      position: "Core",
      phone: "8754017474",
      mail: "ts658@snu.edu.in",
    },
  ];
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
        <div className="ContactPage__tab ContactPage__tab--active">CORE</div>
        <div className="ContactPage__tab ContactPage__tab--inactive">POC</div>
      </div>
      <div className="ContactPage__contacts">
        {contact.map((item, index) => (
          <div className="ContactPage__card" key={index}>
            <div className="ContactPage__card--top">
              <img src={item["image"]} />
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
              <a
                href={`tel:${item["phone"]}`}
                className="ContactPage__cardButton ContactPage__cardButton--green"
              >
                <p>Place a call</p>
                <img src="/Img/arrow-right black.svg" width={20} height={20} />
              </a>
              <a
                href={`mailto:${item["mail"]}`}
                className="ContactPage__cardButton"
              >
                <p>Mail</p>
                <img src="/Img/arrow-right.svg" width={20} height={20} />
              </a>
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
      <Header currentPath="contact" />
      {page}
      <Footer />
    </div>
  );
};
