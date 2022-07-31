import React from "react";
import { useRouter } from "next/router";
import "./Header.scss";

function Header() {
  const [navState, setNavState] = React.useState(false);
  const router = useRouter();
  console.log(router.pathname);
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
            <a
              href="#"
              className={`${router.pathname === "/" ? "route--active" : ""} `}
            >
              Home
            </a>
          </li>
          <li className="HeaderWrapper__MenuList--item">
            <a
              href="#"
              className={`${
                router.pathname === "/about" ? "route--active" : ""
              } `}
            >
              About
            </a>
          </li>
          <li className="HeaderWrapper__MenuList--item">
            <a
              href="#"
              className={`${
                router.pathname === "/gallery" ? "route--active" : ""
              } `}
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
              href="#"
              className={`${
                router.pathname === "/events" ? "route--active" : ""
              } `}
            >
              Events
            </a>
          </li>
          <li className="HeaderWrapper__MenuList--item">
            <a
              href="#"
              className={`${
                router.pathname === "/contact" ? "route--active" : ""
              } `}
            >
              Contact
            </a>
          </li>
          <li className="HeaderWrapper__MenuList--item">
            <a
              href="#"
              className={`${
                router.pathname === "/privacy" ? "route--active" : ""
              } `}
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
