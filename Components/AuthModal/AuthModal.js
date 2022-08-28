import React, { Component } from "react";
import "./AuthModal.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

export default function AuthModal() {
  const [hash, setHash] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    setHash(window.location.hash);

    if (
      window.location.hash === "#login" ||
      window.location.hash === "#signup"
    ) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    window.addEventListener("hashchange", () => {
      setHash(window.location.hash);

      if (
        window.location.hash === "#login" ||
        window.location.hash === "#signup"
      ) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    });
  });

  React.useEffect(() => {
    if (isOpen) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="AuthModal">
          <div className="AuthModal__container">
            <span
              className="AuthModal__container--close"
              onClick={() => {
                setIsOpen(false);
                setHash("");
                window.location.hash = "";
                router.replace(window.location.pathname);
              }}
            >
              &#10799;
            </span>
            <h2>SURGE</h2>
            <div className="AuthModal__tabs">
              <a
                href="#login"
                className={hash === "#login" ? "route--active" : ""}
                onClick={() => {
                  setHash("#login");
                }}
              >
                <p>Login</p>
              </a>
              <a
                href="#signup"
                className={hash === "#login" ? "" : "route--active"}
                onClick={() => {
                  setHash("#signup");
                }}
              >
                <p>Sign Up</p>
              </a>
            </div>
            {hash === "#login" && (
              <Login
                onLogin={() => {
                  setIsOpen(false);
                  setHash("");
                  window.location.hash = "";
                  router.replace(window.location.pathname);
                }}
              />
            )}
            {hash === "#signup" && (
              <SignUp
                onSignUp={() => {
                  setIsOpen(false);
                  setHash("");
                  window.location.hash = "";
                  router.replace(window.location.pathname);
                  router.reload()
                }}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
