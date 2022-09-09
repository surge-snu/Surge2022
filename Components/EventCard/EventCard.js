import "./EventCard.scss";

export default function EventCard() {
  return (
    <div className="EventCardWrapper">
      <div className="EventCardMain">
        <div className="EventCardMain__left">
          <div className="EventCardMain__left__indoor">
            <p className="EventCardMain__left__indoor--text">Indoor</p>
          </div>
          <div className="EventCardMain__left__content">
            <p className="EventCardMain__left__content--header">
              Lorem
              <span className="EventCardMain__left__content--header--lime">
                Epsime
              </span>
            </p>
            <p className="EventCardMain__left__content--desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
            </p>
          </div>
          <div className="EventCardMain__left__details">
            <div className="EventCardMain__left__details--price">
              <p className="EventCardMain__left__details--price__elem1">
                <img
                  src="/Img/eye.svg"
                  className="EventCardMain__left__details--price__elem1__icon"
                />
                100rs / person
              </p>
            </div>
            <div className="EventCardMain__left__details--calendar">
              <p className="EventCardMain__left__details--price__elem2">
                <img
                  src="/Img/calendar.svg"
                  className="EventCardMain__left__details--price__elem2__icon"
                />
                19 Aug 22, 12:00 AM IST - 23 Aug 22, 12:00 AM IST
              </p>
            </div>
            <div className="EventCardMain__left__details--date"></div>
          </div>
        </div>
        <div className="EventCardMain__right">
          <div class="EventCardMain__right--wrapper">
            <a class="EventCardMain__right--wrapper__cta" href="#">
              <span className="EventCardMain__right--wrapper__cta__span">
                Register
              </span>
              <img
                src="/Img/eventArrow.svg"
                className="EventCardMain__right--wrapper__cta--arrow"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
