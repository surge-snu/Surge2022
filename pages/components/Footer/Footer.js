import "./Footer.scss";

export default function Footer() {
  return (
    <div className="FooterWrapper">
      <div className="FooterWrapper__container">
        <div className="FooterWrapper__left">
          <p className="FooterWrapper__left--logo"> Surge</p>
          <p className="FooterWrapper__left--copyrightUnderLogo">
            © 2022 Surge. Alll Rights Reserved
          </p>
        </div>

        <div className="FooterWrapper__right">
          <ul className="FooterWrapper__right--Service">
            <li className="FooterWrapper__right--rowHeading">Pages</li>
            <li>
              <a className="FooterWrapper__right--rowItem" href="/#">
                Home
              </a>
            </li>
            <li>
              <a className="FooterWrapper__right--rowItem" href="/team">
                Team
              </a>
            </li>
            <li>
              <a className="FooterWrapper__right--rowItem" href="/gallery">
                Gallery
              </a>
            </li>
            <li>
              <a className="FooterWrapper__right--rowItem" href="/events">
                Events
              </a>
            </li>
          </ul>
          <ul className="FooterWrapper__right--Service">
            <li className="FooterWrapper__right--rowHeading">Services</li>
            <li>
              <a className="FooterWrapper__right--rowItem" href="/#">
                Content
              </a>
            </li>
            <li>
              <a className="FooterWrapper__right--rowItem" href="/#">
                Content
              </a>
            </li>
            <li>
              <a className="FooterWrapper__right--rowItem" href="/#">
                Content
              </a>
            </li>
            <li>
              <a className="FooterWrapper__right--rowItem" href="/#">
                Content
              </a>
            </li>
          </ul>
          <ul className="FooterWrapper__right--Service">
            <li className="FooterWrapper__right--rowHeading">Contacts</li>
            <li className="FooterWrapper__right--RowIcon">
              <a href="mailto:">
                <img
                  className="FooterWrapper__right--rowImage"
                  src="mail.svg"
                />
              </a>
            </li>
            <li className="FooterWrapper__right--RowIcon">
              <a href="tel:">
                <img
                  className="FooterWrapper__right--rowImage"
                  src="phone.svg"
                />
              </a>
            </li>
            <li className="FooterWrapper__right--RowIcon">
              <a href="https://www.linkedin.com/snu.xplore/">
                <img className="FooterWrapper__right--rowImage" src="map.svg" />
              </a>
            </li>
          </ul>

          <ul className="FooterWrapper__right--socialMedia">
            <li className="FooterWrapper__right--socialHeading">
              Social Media
            </li>
            <li className="FooterWrapper__right--socialRow">
              <a href="mailto:">
                <img
                  className="FooterWrapper__right--rowSocials"
                  src="instagram.svg"
                />
              </a>
            </li>
            <li className="FooterWrapper__right--socialRow">
              <a href="tel:">
                <img
                  className="FooterWrapper__right--rowSocials"
                  src="linkedin.svg"
                />
              </a>
            </li>
            <li className="FooterWrapper__right--socialRow">
              <a href="https://www.linkedin.com/snu.xplore/">
                <img
                  className="FooterWrapper__right--rowSocials"
                  src="facebook.svg"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="FooterWrapper__left--Copyright">surgesnu copyright @2022</p>
    </div>
  );
}
