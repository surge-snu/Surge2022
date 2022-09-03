import React from "react";
import useAuth from "../../hooks/useAuth";
import "./MySidebar.scss";
import Link from "next/link";

function MySidebar() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = React.useState("home");
  const [navState, setNavState] = React.useState(false);

  React.useEffect(() => {
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
      </div>
    </aside>
  );
}

export default MySidebar;
