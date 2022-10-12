import Link from "next/link";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="FooterWrapper" id="contact">
      <div className="FooterWrapper__container">
        <div className="FooterWrapper__left">
          {/* <p className="FooterWrapper__left--logo"> Surge</p> */}
          <img
            alt="Black Surge Logo"
            className="FooterWrapper__left--logo"
            src="/Img/Surge_Logo.png"
          />
          <p className="FooterWrapper__left--copyrightUnderLogo">
            © 2022 Surge. Alll Rights Reserved
          </p>
        </div>

        <div className="FooterWrapper__right">
          <ul className="FooterWrapper__right--Service">
            <li className="FooterWrapper__right--rowHeading">Pages</li>
            <li>
              <Link href="/">
                <a className="FooterWrapper__right--rowItem">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/team">
                <a className="FooterWrapper__right--rowItem">Team</a>
              </Link>
            </li>
            <li>
              <Link href="/gallery">
                <a className="FooterWrapper__right--rowItem">Gallery</a>
              </Link>
            </li>
            <li>
              <Link href="/events">
                <a className="FooterWrapper__right--rowItem">Events</a>
              </Link>
            </li>
          </ul>
          <ul className="FooterWrapper__right--Service">
            <li className="FooterWrapper__right--rowHeading">Contacts</li>
            <li className="FooterWrapper__right--RowIcon">
              <img
                alt="Mail"
                loading="lazy"
                className="FooterWrapper__right--rowImage"
                src="/Img/mail.svg"
              />

              <a
                target="_blank"
                referrerPolicy="no-referrer"
                className="FooterWrapper__right--rowItem"
                href="mailto:surge@snu.edu.in"
              >
                surge@snu.edu.in
              </a>
            </li>
            <li className="FooterWrapper__right--RowIcon">
              <img
                alt="Map"
                loading="lazy"
                className="FooterWrapper__right--rowImage"
                src="/Img/map.svg"
              />

              <a
                target="_blank"
                referrerPolicy="no-referrer"
                className="FooterWrapper__right--rowItem"
                href="https://www.google.com/maps/dir//Shiv+Nadar+University+NH91,+Tehsil+Dadri+Greater+Noida,+Uttar+Pradesh+201314/@28.5267298,77.575363,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x390ceb4eaaaaaaab:0x321412756718874c"
              >
                SNIOE, Delhi, Noida
              </a>
            </li>
          </ul>

          <ul className="FooterWrapper__right--Service">
            <li className="FooterWrapper__right--rowHeading">Social Media</li>
            <li className="FooterWrapper__right--RowIcon">
              <img
                alt="Instagram"
                loading="lazy"
                className="FooterWrapper__right--RowIcon"
                src="/Img/instagram.svg"
              />
              <a
                target="_blank"
                referrerPolicy="no-referrer"
                className="FooterWrapper__right--rowItem"
                href="https://www.instagram.com/surge.snu/"
              >
                surge.snu
              </a>
            </li>
            <li className="FooterWrapper__right--RowIcon">
              <img
                alt="Youtube"
                loading="lazy"
                className="FooterWrapper__right--RowIcon"
                src="/Img/youtube.svg"
                width={20}
              />

              <a
                target="_blank"
                referrerPolicy="no-referrer"
                className="FooterWrapper__right--rowItem"
                href="https://youtube.com/channel/UCH3NnboPus4MEmfqU5oPdqA"
              >
                Surge
              </a>
            </li>
            <li className="FooterWrapper__right--RowIcon">
              <img
                alt="LinkedIn"
                loading="lazy"
                className="FooterWrapper__right--RowIcon"
                src="/Img/linkedin.svg"
              />

              <a
                target="_blank"
                referrerPolicy="no-referrer"
                className="FooterWrapper__right--rowItem"
                href="https://www.linkedin.com/company/surge-shiv-nadar-university/"
              >
                Surge
              </a>
            </li>
            <li className="FooterWrapper__right--RowIcon">
              <img
                alt="Facebook"
                loading="lazy"
                className="FooterWrapper__right--RowIcon"
                src="/Img/facebook.svg"
              />

              <a
                target="_blank"
                referrerPolicy="no-referrer"
                className="FooterWrapper__right--rowItem"
                href="https://www.facebook.com/surge.snu/"
              >
                surge.snu
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="FooterWrapper__left--Copyright">surgesnu copyright @2022</p>
    </div>
  );
}
