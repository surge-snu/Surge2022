import React from "react";
import "./Newsletter.scss";

export default function Newsletter() {
  const [email, setEmail] = React.useState("");
  const handler = async () => {
    const data = await fetch(`/api/notify-list?email=${email}`);
    // console.log(data);

    if (data.status === 200) {
      window.alert("You have been added to the newsletter list");
    } else {
      window.alert("You have already been added to the newsletter list");
    }
  };

  return (
    <div className="Newsletter">
      <div className="Newsletter__container">
        <h2>GET STARTED</h2>
        <p>
          Subscribe to our
          <br />
          <span>Newsletter!</span>
        </p>
        <form
          className="Newsletter__container--row"
          onSubmit={(e) => {
            e.preventDefault();
            handler();
          }}
        >
          <input
            required
            type="email"
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Get started</button>
        </form>
      </div>
    </div>
  );
}
