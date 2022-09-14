import "./EventGist.scss";

export default function EventGist({ className }) {
  return (
    <div className={`eventGist ${className}`}>
      <div className="eventGist__top">
        <p className="eventGist__top--title">RUNS FROM</p>
        <p className="eventGist__top--desc">Oct 11-13, 2022</p>
        <p className="eventGist__top--title">HAPPENING</p>
        <p className="eventGist__top--desc">Indoor Sports Complex</p>
      </div>
      <div className="eventGist__bottom">
        <div className="eventGist__bottom__price">
          <div className="eventGist__bottom__price__rs">
            <p className="eventGist__bottom__price__rs--title">Price</p>
            <p className="eventGist__bottom__price__rs--cost">Rs. 250</p>
          </div>
          <div className="eventGist__bottom__price__cart">
            <p className="eventGist__bottom__price__cart--title">Cart</p>
            <svg
              width="28"
              height="24"
              viewBox="0 0 43 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.37067 5.92L7.77368 2.22H5.63085C5.31122 0.9472 4.19895 0 2.86667 0C1.2857 0 0 1.32756 0 2.96C0 4.59244 1.2857 5.92 2.86667 5.92C4.19895 5.92 5.31122 4.9728 5.63157 3.7H6.55893L6.91727 5.92H6.89003L10.5959 25.1718C8.82933 25.311 7.35802 26.7155 7.18458 28.4826C7.08282 29.5223 7.41392 30.5635 8.09332 31.3375C8.77343 32.1138 9.74237 32.56 10.75 32.56H12.1833C12.1833 35.0087 14.1119 37 16.4833 37C18.8548 37 20.7833 35.0087 20.7833 32.56H28.6667C28.6667 35.0087 30.5952 37 32.9667 37C35.3381 37 37.2667 35.0087 37.2667 32.56H40.1333C40.5296 32.56 40.85 32.2292 40.85 31.82C40.85 31.4108 40.5296 31.08 40.1333 31.08H37.0158C36.4239 29.358 34.835 28.12 32.9667 28.12C31.0983 28.12 29.5095 29.358 28.9175 31.08H20.5325C19.9405 29.358 18.3517 28.12 16.4833 28.12C14.615 28.12 13.0261 29.358 12.4342 31.08H10.75C10.1466 31.08 9.56607 30.8121 9.15613 30.3452C8.74262 29.8723 8.5484 29.264 8.61075 28.6313C8.71968 27.5147 9.71872 26.6407 10.8847 26.6407H11.4516C11.4616 26.6407 11.4695 26.6407 11.4796 26.6407H39.4253C41.3968 26.64 43 24.9846 43 22.9496V5.92H8.37067ZM2.86667 4.44C2.07618 4.44 1.43333 3.77622 1.43333 2.96C1.43333 2.14378 2.07618 1.48 2.86667 1.48C3.65715 1.48 4.3 2.14378 4.3 2.96C4.3 3.77622 3.65715 4.44 2.86667 4.44Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <p className="eventGist__bottom__payment--description">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.Lorem
          ipsum dolor sit amet consectetur adipiscing elit Ut et.
        </p>
        <a className="eventGist__bottom__payment__cta--cta" href="/demo">
          Proceed to payment
          <img
            className="eventGist__bottom__payment__cta--cta--img"
            src="/Img/Arrow 9.svg"
          />
        </a>
        <div className="eventGist__bottom--divider" />
        <div className="eventGist__bottom__register">
          <p className="eventGist__bottom__register__closes">
            REGISTRATION CLOSING IN
          </p>
          <p className="eventGist__bottom__register__time">0d:0h:0m</p>
        </div>
      </div>
    </div>
  );
}
