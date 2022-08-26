import "./SignUp.scss";
import React from "react";
import PinInput from "react-pin-input";

export default function SignUp() {
  const [showOtp, setShowOtp] = React.useState(true);

  return (
    <div>
      {showOtp && (
        <div class="Otp">
          <div className="Otp__container">
            <span
              className="Otp__close"
              onClick={() => {
                setShowOtp(false);
              }}
            >
              &#10799;
            </span>
            <div className="Otp__title">
              <p>Verification Code</p>
            </div>
            <div className="Otp__desc">
              <p>Please type the verification code sent to xyz@gmail.com</p>
            </div>
            <div className="Otp__pin">
              <PinInput
                length={4}
                initialValue=""
                onChange={(value, index) => {}}
                type="numeric"
                inputMode="number"
                style={{ padding: "10px" }}
                inputStyle={{
                  borderColor: "black",
                  borderRadius: "8px",
                  marginRight: "20px",
                  color: "black",
                  fontSize: "20px",
                }}
                onComplete={(value, index) => {}}
                autoSelect={true}
              />
            </div>
            <div className="Otp__again">
              <div className="Otp__again--text">
                <p>Didn't get the code? &nbsp;</p>
              </div>
              <a>Send Again</a>
            </div>
          </div>
        </div>
      )}
      <div className="SignUp">
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
            <label htmlFor="tandc">
              I agree to the Terms and Privacy Policy
            </label>
          </div>
        </div>
        <div className="SignUp__button">
          <button onClick={() => setShowOtp(true)} type="submit">
            Sign Up
          </button>
        </div>
        <div className="SignUp__login">
          <div className="SignUp__login--text">Already have an account?</div>
          <a href="#login">LogIn</a>
        </div>
      </div>
    </div>
  );
}
