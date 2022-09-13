import "./EventCard.scss";

export default function EventCard({event}) {
  return (
    <div className="EventCard">
      <div className="EventCard__left">
        <div className="EventCard__left__indoor">
          <p className="EventCard__left__indoor--text">Indoor</p>
        </div>
        <div className="EventCard__left__content">
          <p className="EventCard__left__content--header">
            Lorem
            <span className="EventCard__left__content--header--lime">
              Epsime
            </span>
          </p>
          <p className="EventCard__left__content--desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
          </p>
        </div>
        <div className="EventCard__left__details">
          <div className="EventCard__left__details--price">
            <p className="EventCard__left__details--price__elem">
              <img
                src="/Img/eye.svg"
                className="EventCard__left__details--price__elem__icon"
              />
							{ event.pricePerPlayer }rs / person
            </p>
          </div>
          <div className="EventCard__left__details--calendar">
            <p className="EventCard__left__details--price__elem2">
              <img
                src="/Img/calendar.svg"
                className="EventCard__left__details--price__elem2__icon"
              />
              19 Aug 22, 12:00 AM IST - 23 Aug 22, 12:00 AM IST
            </p>
          </div>
          <div className="EventCard__left__details--date"></div>
        </div>
      </div>
      <div className="EventCard__right">
        <a class="EventCard__right__cta" href="#">
          <span className="EventCard__right__cta--register">Register</span>
          <span className="EventCard__right__cta--icon">
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
                stroke-width="3.35214"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}
