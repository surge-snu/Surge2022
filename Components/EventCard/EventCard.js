import Link from "next/link";
import "./EventCard.scss";

export default function EventCard({ event }) {
  const date = new Date(event.dateFrom).toString().split(" ");

  return (
    <div className="EventCard">
      <div className="EventCard__top">
        <div className="EventCard__top--indoor">{event.location}</div>
        <div className="EventCard__top--title">
          <h2>
            {event.eventName} ({event.category})
          </h2>
          <p>{event.description}</p>
        </div>
        <div className="EventCard__details">
          <div className="EventCard__details--price">
            <img src="/Img/eye.svg" alt="eye image" />
            <p>₹{event.pricePerPlayer} / person</p>
          </div>
          <div className="EventCard__details--calender">
            <img src="/Img/calendar.svg" alt="Calender" />
            <p>{`${date[0]}, ${date[2]} November ${date[3]}`}</p>
          </div>
        </div>
      </div>
      <Link href={`/event/${event.eventId}/overview`}>
        <a
          className="EventCard__bottom"
          aria-label={`Register for ${event.eventName} (${event.category})`}
        >
          <span className="EventCard__bottom--register">Register</span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.86816 14.3217H21.5115M21.5115 14.3217L13.6898 6.5M21.5115 14.3217L13.6898 22.1433"
              stroke="#CAFA08"
              strokeWidth="3.35214"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </Link>
    </div>
  );
}
