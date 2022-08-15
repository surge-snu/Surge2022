import React from "react";
import { useRouter } from "next/router";
import "./Header.scss";

function Header() {
  const [navState, setNavState] = React.useState(false);
  const [hash, setHash] = React.useState("");
  const router = useRouter();

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        document.querySelector(".HeaderWrapper").style.height = "70px";
      } else {
        document.querySelector(".HeaderWrapper").style.height = "";
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  React.useEffect(() => {
    window.onhashchange = () => {

      setHash(window.location.hash);
      console.log(window.location.hash);
    };
  }, []);

  return (
    <div className="HeaderWrapper">
      <span className="HeaderWrapper__logo">
        <a href="#">Surge</a>
      </span>
      <div
        className={`HeaderWrapper__Menu ${
          navState ? "HeaderWrapper__Menu--open" : ""
        }`}
      >
        <ul className="HeaderWrapper__MenuList--left">
          <li className="HeaderWrapper__MenuList--item">
            <a href="/" className={`${hash === "" ? "route--active" : ""} `}>
              Home
            </a>
          </li>
          <li className="HeaderWrapper__MenuList--item">
            <a
              href="#about"
              className={`${hash === "#about" ? "route--active" : ""} `}
            >
              About
            </a>
          </li>
          <li className="HeaderWrapper__MenuList--item">
            <a
              href="#gallery"
              className={`${hash === "#gallery" ? "route--active" : ""} `}
            >
              Gallery
            </a>
          </li>
        </ul>
        <span className="HeaderWrapper__MenuList--center">
          <a href="#">Surge</a>
        </span>
        <ul className="HeaderWrapper__MenuList--right">
          <li className="HeaderWrapper__MenuList--item">
            <a
              href="#events"
              className={`${hash === "#events" ? "route--active" : ""} `}
            >
              Events
            </a>
          </li>
          <li className="HeaderWrapper__MenuList--item">
            <a
              href="#contact"
              className={`${hash === "#contact" ? "route--active" : ""} `}
            >
              Contact
            </a>
          </li>
          <li className="HeaderWrapper__MenuList--item">
            <a
              href="#privacy"
              className={`${hash === "#privacy" ? "route--active" : ""} `}
            >
              Privacy
            </a>
          </li>
        </ul>
      </div>
      <div className="HeaderWrapper__Hamburger">
        <input
          type="checkbox"
          id="NavBarInput"
          onChange={() => {
            setNavState(!navState);
          }}
        />
        <div className="hamButton">
          <label className="HamMenu" htmlFor="NavBarInput">
            <span className="span HL1" />
            <span className="span HL2" />
            <span className="span HL3" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Header;