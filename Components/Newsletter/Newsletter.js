import "./Newsletter.scss";

export default function Newsletter() {
  return (
    <div className="Newsletter">
      <div className="Newsletter__container">
        <h2>GET STARTED</h2>
        <p>
          Subscribe to our
          <br />
          <span>Newsletter!</span>
        </p>
        <div className="Newsletter__container--row">
          <input type="text" placeholder="Enter your email address" />
          <button>Get started</button>
        </div>
      </div>
    </div>
  );
}
