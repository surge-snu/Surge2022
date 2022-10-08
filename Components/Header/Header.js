import React from "react";
import "./Header.scss";
import useAuth from "../../hooks/useAuth";
import Link from "next/link";

function Header({ currentPath = "", isSidebar = true }) {
  const [navState, setNavState] = React.useState(false);
  const [hash, setHash] = React.useState("");

  const [path, setPath] = React.useState(currentPath.replace("/", ""));
  const { user } = useAuth();

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

  return (
    <div className="HeaderWrapper">
      <div className="HeaderWrapper__logo">
        <a href="/">Surge</a>
      </div>
      <div
        className={`HeaderWrapper__Menu ${
          navState ? "HeaderWrapper__Menu--open" : ""
        } ${!isSidebar ? "HeaderWrapper__Menu--hide" : ""}`}
      >
        <ul className="HeaderWrapper__MenuList--left">
          <li className="HeaderWrapper__MenuList--item">
            <Link href="/">
              <a
                className={`${path === "/" ? "route--active" : ""}`}
                onClick={() => {
                  setPath("/");
                }}
              >
                Home
              </a>
            </Link>
          </li>
          <li className="HeaderWrapper__MenuList--item">
            <Link href="/sponsors">
              <a
                className={`${path === "sponsors" ? "route--active" : ""}`}
                onClick={() => {
                  setPath("sponsors");
                }}
              >
                Sponsors
              </a>
            </Link>
          </li>
          <li className="HeaderWrapper__MenuList--item">
            <Link href="/gallery">
              <a
                className={`${path === "gallery" ? "route--active" : ""} `}
                onClick={() => {
                  setPath("gallery");
                }}
              >
                Gallery
              </a>
            </Link>
          </li>
        </ul>
        <span className="HeaderWrapper__MenuList--center">
          <Link href="/">
            <a
              onClick={() => {
                setPath("");
              }}
            >
              Surge
            </a>
          </Link>
        </span>
        <ul className="HeaderWrapper__MenuList--right">
          <li className="HeaderWrapper__MenuList--item">
            <Link href="/events">
              <a
                className={`${path === "events" ? "route--active" : ""} `}
                onClick={() => {
                  setPath("events");
                }}
              >
                Events
              </a>
            </Link>
          </li>
          <li className="HeaderWrapper__MenuList--item">
            <Link href="/contact">
              <a
                className={`${path === "contact" ? "route--active" : ""} `}
                onClick={() => {
                  setPath("contact");
                }}
              >
                Contact
              </a>
            </Link>
          </li>
          <li className="HeaderWrapper__MenuList--item">
            {!user ? (
              <a
                href="#login"
                className={`${
                  hash === "#login" || hash === "#signup" ? "route--active" : ""
                } `}
              >
                Login
              </a>
            ) : (
              <Link href="/my">
                <a
                  className={`${path === "profile" ? "route--active" : ""} `}
                  onClick={() => {
                    setPath("profile");
                  }}
                >
                  Profile
                </a>
              </Link>
            )}
          </li>
        </ul>
      </div>
      {isSidebar && (
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
      )}
    </div>
  );
}

export default Header;
