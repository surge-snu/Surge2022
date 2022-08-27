import "./SignUp.scss";
import React from "react";
import useForm from "../../../hooks/useForm";
import { isEmail, isPassword, isUsername } from "../../../utils/validate";

	export default function SignUp() {
  const initialValues = {
    friendlyName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [showOtp, setShowOtp] = React.useState(false);

  function validate(formValues) {
    const errs = {};
    if (!isUsername(formValues.friendlyName)) {
      errs.friendlyName = "Invalid friendly name";
    }

    if (!isEmail(formValues.email)) {
      errs.email = "Invalid Email";
    }

    if (!isPassword(formValues.password.trim())) {
      errs.password =
        "Password must have at least one digit, one uppercase & one lowercase letter and min. 8 characters length";
    }

    if (formValues.confirmPassword.trim() !== formValues.password.trim()) {
      errs.confirmPassword = "Password and confirm password must match";
    } else {
      errs.confirmPassword = "";
    }

    return errs;
  }

  const { onChange, isSubmitting, handleSubmit, errors } = useForm({
    validate,
    initialValues,
    onSubmit: async (formData) => {
      if (Object.keys(errors).length !== 0) return;

      fetch("/api/auth/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    },
    onChangeError: (errors) => {
      console.log(errors);
    },
  });

  return (
    <>
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
      <form method="POST" className="SignUp" onSubmit={handleSubmit}>
        <div className="SignUp__row">
          <label htmlFor="friendlyName">Name</label>
          <input
            id="friendlyName"
            type="text"
            required
            onChange={(e) => onChange("friendlyName", e)}
          />
          {errors.friendlyName && (
            <span className="SignUp__row--error">{errors.friendlyName}</span>
          )}
        </div>
        <div className="SignUp__row">
          <label htmlFor="email">Email ID</label>
          <input
            id="email"
            type="email"
            required
            onChange={(e) => onChange("email", e)}
          />
          {errors.email && (
            <span className="SignUp__row--error">{errors.email}</span>
          )}
        </div>
        <div className="SignUp__col">
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              required
              onChange={(e) => onChange("password", e)}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              required
              onChange={(e) => onChange("confirmPassword", e)}
            />
          </div>
        </div>
        {errors.password && (
          <span className="SignUp__row--error">{errors.password}</span>
        )}
        {errors.confirmPassword && (
          <span className="SignUp__row--error">{errors.confirmPassword}</span>
        )}
        <div className="SignUp__bottom">
          <div className="SignUp__bottom--signedIn">
            <input type="checkbox" id="tandc" name="tandc" value="tandc" />
            <label htmlFor="tandc">
              I agree to the Terms and Privacy Policy
            </label>
          </div>
        </div>
        <div className="SignUp__button">
          <button type="submit">Sign Up</button>
        </div>
        <div className="SignUp__login">
          <div className="SignUp__login--text">Already have an account?</div>
          <a href="#login">LogIn</a>
        </div>
      </form>
    </>
  );
}
