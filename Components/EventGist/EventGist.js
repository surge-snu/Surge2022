import Link from "next/link";
import React from "react";
import { Cashify } from "../../utils/Cashify";
import "./EventGist.scss";

export default function EventGist({ className, from, venue, price, eventId }) {
  // create a countdown timer using From pram to today
  const [countdown, setCountdown] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const today = new Date();
      const eventDate = new Date(from);
      const diff = eventDate.getTime() - today.getTime();

      // format diff to days, hours, minutes, seconds
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`eventGist ${className}`}>
      <div className="eventGist__top">
        <p className="eventGist__top--title">RUNS FROM</p>
        <p className="eventGist__top--desc">{from}</p>
        <p className="eventGist__top--title">HAPPENING</p>
        <p className="eventGist__top--desc">{venue}</p>
      </div>
      <div className="eventGist__bottom">
        <div className="eventGist__bottom__price">
          <div className="eventGist__bottom__price__rs">
            <p className="eventGist__bottom__price__rs--title">Price Per Player</p>
            <p className="eventGist__bottom__price__rs--cost">
              {Cashify(price)}
            </p>
          </div>
        </div>
        <p className="eventGist__bottom__payment--description">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.Lorem
          ipsum dolor sit amet consectetur adipiscing elit Ut et.
        </p>
        <Link href={`/event/${eventId}/register`}>
          <a className="eventGist__bottom__payment__cta--cta">
            Register Now!
            <img
              className="eventGist__bottom__payment__cta--cta--img"
              src="/Img/Arrow 9.svg"
            />
          </a>
        </Link>
        <div className="eventGist__bottom--divider" />
        <div className="eventGist__bottom__register">
          <p className="eventGist__bottom__register__closes">
            REGISTRATION CLOSING IN
          </p>
          <p className="eventGist__bottom__register__time">{countdown}</p>
        </div>
      </div>
    </div>
  );
}
