import "../../styles/root/newsletter.scss";

export default function Newsletter() {
  return (
    <div className="news">
      <div className="news__letter">
        <div className="news__letter__content">
          <div className="news__letter__content__text">
            <p className="news__letter__content__text--header">GET STARTED</p>
            <p className="news__letter__content__text__subscribe">
              <span className="news__letter__content__text__subscribe--sub">
                Subscribe to our
              </span>
              <span className="news__letter__content__text__subscribe--news">
                Newsletter!
              </span>
            </p>
          </div>
          <div className="news__letter__content__entryField">
            <input
              className="news__letter__content__entryField--textField"
              type="text"
              placeholder="Enter your email address"
            />
            <button className="news__letter__content__entryField--button">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
