import "./EventCard.scss";

export default function EventCard({ event }) {
  return (
    <div className="EventCard">
      <div className="EventCard__top">
        <div className="EventCard__top--indoor">Indoor</div>
        <div className="EventCard__top--title">
          <h2>{event.eventName}</h2>
          <p>{event.description}</p>
        </div>
        <div className="EventCard__details">
          <div className="EventCard__details--price">
            <img src="/Img/eye.svg" />
            <p>₹{event.pricePerPlayer} / person</p>
          </div>
          <div className="EventCard__details--calender">
            <img src="/Img/calendar.svg" />
            <p>19 Aug 22, 12:00 AM IST - 23 Aug 22, 12:00 AM IST</p>
          </div>
        </div>
      </div>
      <a
        className="EventCard__bottom"
        href={`/event/${event.eventId}/overview`}
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
    </div>
  );
}
