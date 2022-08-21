import "./SignUp.scss";
import React from "react";


export default function SignUp() {
  return (
    <form method="POST" className="SignUp">
      <div className="SignUp__name">
        <div className="SignUp__name--label">Name</div>
        <input className="SignUp__name--input" type="text" required />
      </div>
      <div className="SignUp__email">
        <div className="SignUp__email--label">Email ID</div>
        <input className="SignUp__email--input" type="email" required />
      </div>
      <div className="SignUp__password">
        <div className="SignUp__password--first">
          <div className="SignUp__password--first__label">Password</div>
          <input
            className="SignUp__password--first__input"
            type="password"
            required
          />
        </div>
        <div className="SignUp__password--confirm">
          <div className="SignUp__password--confirm__label">
            Confirm Password
          </div>
          <input
            className="SignUp__password--confirm__input"
            type="password"
            required
          />
        </div>
      </div>
      <div className="SignUp__bottom">
        <div className="SignUp__bottom--signedIn">
          <input type="checkbox" id="tandc" name="tandc" value="tandc" />
          <label htmlFor="tandc">I agree to the Terms and Privacy Policy</label>
        </div>
      </div>
      <div className="SignUp__button">
        <button onClick={() => setModalOpen(!modalOpen)} type="submit">
          Sign Up
        </button>
      </div>
      <div className="SignUp__login">
        <div className="SignUp__login--text">Already have an account?</div>
        <a href="#login">LogIn</a>
      </div>
    </form>
  );
}
