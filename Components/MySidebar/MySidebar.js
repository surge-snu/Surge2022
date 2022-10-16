import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./MySidebar.scss";
import Link from "next/link";

function MySidebar({ user }) {
  const [activeTab, setActiveTab] = useState("home");
  const [navState, setNavState] = useState(false);
  const cartCount = user.Team
    ? user.Team.reduce((acc, team) => {
        if (team.paymentStatus === "NOT_PAID") {
          return acc + 1;
        }
        return acc;
      }, 0)
    : 0;

  useEffect(() => {
    setActiveTab(window.location.pathname.split("/my")[1].replace("/", ""));
  });

  return (
    <aside
      className={`MySidebarWrapper ${navState ? "MySidebarWrapper--open" : ""}`}
    >
      <div
        className={`MySidebarWrapper__Hamburger ${
          navState ? "MySidebarWrapper__Hamburger--open" : ""
        }`}
      >
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
      <div className="MySidebarWrapper__top">
        <Link href="/">
          <a
            className="MySidebarWrapper__top--right"
            aria-label="Go to home page"
          >
            <img alt="left arrow" src="/Img/Arrow Right Variant.svg" />
            <h2>Home</h2>
          </a>
        </Link>
        <div className="MySidebarWrapper__top--left">
          <h2>{user.name}</h2>
          <span>{user.email}</span>
        </div>
      </div>
      <div className="MySidebarWrapper__bottom">
        <Link href="/my/home">
          <a
            className={`MySidebarWrapper__item ${
              activeTab === "home" && "MySidebarWrapper__item--active"
            }`}
          >
            Home
            {user.college === "" ||
              (user.phone === "" && (
                <img alt="Error" src="/Img/Red Exclamation.svg" height={20} />
              ))}
          </a>
        </Link>
        <Link href="/my/events">
          <a
            className={`MySidebarWrapper__item ${
              activeTab === "events" && "MySidebarWrapper__item--active"
            }`}
          >
            Events
          </a>
        </Link>

        <Link href="/my/cart">
          <a
            className={`MySidebarWrapper__item ${
              activeTab === "cart" && "MySidebarWrapper__item--active"
            }`}
          >
            Cart
            {cartCount > 0 && (
              <span className="MySidebarWrapper__item--count">{cartCount}</span>
            )}
          </a>
        </Link>
      </div>
    </aside>
  );
}

export default MySidebar;
