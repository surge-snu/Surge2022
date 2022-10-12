import Link from "next/link";
import React from "react";
import "./RegistrationSuccess.scss";

function RegistrationSuccess() {
  return (
    <div className="RegistrationSuccessWrapper">
      <h3>Your team has been added to Cart!</h3>
      <img alt="Success" src="/Img/success.png" />
      <p>
        You can add more events to your cart or make payments for teams in your
        cart!
      </p>
      <div className="RegistrationSuccessWrapper__actions">
        <Link href="/events">
          <a aria-label="Go to all events">Events</a>
        </Link>
        <Link href="/my/cart">
          <a aria-label="Go to your cart">Cart</a>
        </Link>
      </div>
    </div>
  );
}

export default RegistrationSuccess;
