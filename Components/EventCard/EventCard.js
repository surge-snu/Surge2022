import "./EventCard.scss";

export default function EventCard() {
  return (
    <div className="EventCard">
      <div className="EventCard__left">
        <div className="EventCard__left__indoor">
          <p className="EventCard__left__indoor--text">Indoor</p>
        </div>
        <div className="EventCard__left__content">
          <p className="EventCard__left__content--header">
            Lorem Impsum Dolor Sit
          </p>
          <p className="EventCard__left__content--desc">
            Lorem ipsum dolor sit amet, consecteturadipiscing elit. Ut et
            massa mi dolor sit ame.Lorem ipsum dolor sit amet,
            consecteturadipiscing elit.
          </p>
        </div>
        <div className="EventCard__left__details">
          <div className="EventCard__left__details--price">
            <p className="EventCard__left__details--price__elem">
              <img
                src="/Img/clock.svg"
                className="EventCard__left__details--price__elem__icon"
              />
              2 Days left
            </p>
            <p className="EventCard__left__details--price__elem">
              <img
                src="/Img/eye.svg"
                className="EventCard__left__details--price__elem__icon"
              />
              100rs / person
            </p>
            <p className="EventCard__left__details--price__elem">
              <img
                src="/Img/people.svg"
                className="EventCard__left__details--price__elem__icon"
              />
              20 registered
            </p>
          </div>
          <div className="EventCard__left__details--calendar">
            <p className="EventCard__left__details--price__elem">
              <img
                src="/Img/calendar.svg"
                className="EventCard__left__details--price__elem__icon"
              />
              19 Aug 22, 12:00 AM IST - 23 Aug 22, 12:00 AM IST
            </p>
          </div>
          <div className="EventCard__left__details--date"></div>
        </div>
      </div>
      <div className="EventCard__right">
        <a class="EventCard__right__cta" href="#">
            <span className="EventCard__right__cta--register">
              Register
            </span>
            <span className="EventCard__right__cta--icon">
              <svg width="35" height="16" viewBox="0 0 71 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M69.7723 8.70711C70.1628 8.31658 70.1628 7.68342 69.7723 7.29289L63.4083 0.928932C63.0178 0.538408 62.3846 0.538408 61.9941 0.928932C61.6036 1.31946 61.6036 1.95262 61.9941 2.34315L67.651 8L61.9941 13.6569C61.6036 14.0474 61.6036 14.6805 61.9941 15.0711C62.3846 15.4616 63.0178 15.4616 63.4083 15.0711L69.7723 8.70711ZM0 9H69.0652V7H0V9Z" fill="black"/>
							</svg>
            </span>
          </a>
      </div>
    </div>
  );
}
