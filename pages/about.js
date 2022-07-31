import "../styles/root/about.scss";

export default function About() {
  return (
    <div className="about_container">
      <div className="text">
        <div className="heading_section">
          <h1 className="backtext_aboutus">ABOUT</h1>
          <h1 className="heading_aboutus">
            THE <span className="asf">ANUAL SPORTS FEST</span> OF SHIV NADAR
            UNIVERSITY
          </h1>
        </div>
        <p className="paragraph_aboutus">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
        <a href="#" className="btn">
          <button className="button_aboutus">Meet the Team</button>
        </a>
      </div>
      <div className="image">
        <img className="football" src="./Sports icon.png" />
      </div>
    </div>
  );
}
