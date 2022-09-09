import React from "react";
import "./ResetPassword.scss";
const bcrypt = require("bcryptjs");
import useForm from "../../../hooks/useForm";
import { isEmail, isPassword } from "../../../utils/validate";
import BlurredSpinner from "../../BlurredSpinner/BlurredSpinner";
import PinInput from "react-pin-input";
import { changePassword, passwordOtp } from "../../../operations/auth.fetch";

function ResetPassword({ onPasswordReset }) {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [showLoader, setShowLoader] = React.useState(false);
  const [showOtp, setShowOtp] = React.useState(false);
  const [otpError, setOtpError] = React.useState("");
  const [cryptOtp, setCryptOtp] = React.useState("");
  const [duplicateError, setDuplicateError] = React.useState({});
  const [showPassFields, setShowPassFields] = React.useState(false);

  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    if (window.innerWidth < 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });

  async function validate(formValues) {
    const errs = {};

    if (formValues.email && !isEmail(formValues.email)) {
      errs.email = "Invalid Email";
    }

    if (formValues.password && !isPassword(formValues.password.trim())) {
      errs.password =
        "Password must have at least one digit, one uppercase, one lowercase letter and min. 8 characters length";
    }

    if (
      formValues.confirmPassword &&
      formValues.confirmPassword.trim() !== formValues.password.trim()
    ) {
      errs.confirmPassword = "Password and confirm password must match";
    }

    return errs;
  }
  
  const { formData, onChange, handleSubmit, errors } = useForm({
    validate,
    initialValues,
    onSubmit: async (formData) => {
      if (Object.keys(errors).length !== 0) return;
      setShowLoader(true);

      if (!showPassFields) {
        await passwordOtp(formData).then((res) => {
          setCryptOtp(res.otp);
          setShowLoader(false);
          if (res.status === 200) {
            setShowOtp(true);
          } else {
            setDuplicateError(res.message);
          }
        });
      } else {
        await changePassword(formData).then((res) => {
          if (res.status === 200) {
            setShowLoader(false);
            setShowOtp(false);

            onPasswordReset();
          }
        });
      }
    },
  });

  return (
    <>
      {showLoader && <BlurredSpinner style={{ borderRadius: "7px" }} />}

      {showOtp && (
        <div className="Otp">
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
              <p>Please type the verification code sent to {formData.email}</p>
              <em>(Also check your spam folder)</em>
            </div>
            <div className="Otp__pin">
              <PinInput
                length={5}
                type="custom"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "7px",
                }}
                inputStyle={{
                  margin: "0",
                  color: "black",
                  border: "1px solid",
                  width: isMobile ? "30px" : "50px",
                  height: isMobile ? "30px" : "50px",
                  fontSize: isMobile ? "15px" : "20px",
                  borderRadius: isMobile ? "4px" : "7px",
                }}
                inputFocusStyle={{
                  border: "2px solid",
                }}
                onComplete={async (value) => {
                  const isMatch = bcrypt.compareSync(value, cryptOtp);
                  setShowLoader(true);

                  if (isMatch) {
                    setShowPassFields(true);
                    setShowOtp(false);
                    setShowLoader(false);
                  } else {
                    setShowLoader(false);
                    setOtpError("Invalid OTP");
                  }
                }}
                autoSelect={true}
                validate={(value) => (/^[a-z0-9]*$/.test(value) ? value : "")}
              />
            </div>
            {otpError !== "" && <span className="Otp__error">{otpError}</span>}
            <div className="Otp__again">
              <div className="Otp__again--text">
                <p>Didn't get the code? &nbsp;</p>
              </div>
              <span
                onClick={async () => {
                  setShowLoader(true);
                  setShowOtp(false);

                  await passwordOtp(formData).then((res) => {
                    setCryptOtp(res.otp);
                    setShowLoader(false);
                    if (res.status === 200) {
                      setShowOtp(true);
                    } else {
                      setDuplicateError(res.message);
                    }
                  });
                }}
              >
                Send Again
              </span>
            </div>
          </div>
        </div>
      )}
      <form
        method="POST"
        className="ResetPasswordWrapper"
        onSubmit={handleSubmit}
      >
        {!showPassFields && (
          <>
            <div className="ResetPasswordWrapper__row">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                onChange={(e) => onChange("email", e)}
                value={formData.email}
              />
              {errors.email && (
                <span className="ResetPasswordWrapper__row--error">
                  {errors.email}
                </span>
              )}
              {duplicateError.email && (
                <span className="ResetPasswordWrapper__row--error">
                  {duplicateError.email}
                </span>
              )}
            </div>
            <div className="ResetPasswordWrapper__button">
              <button type="submit">Send Otp</button>
            </div>
          </>
        )}

        {showPassFields && (
          <>
            <div className="ResetPasswordWrapper__row">
              <label htmlFor="password">New Password</label>
              <input
                id="password"
                type="password"
                required
                value={formData.password}
                onChange={(e) => onChange("password", e)}
              />
            </div>
            <div className="ResetPasswordWrapper__row">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                value={formData.confirmPassword}
                id="confirmPassword"
                type="password"
                required
                onChange={(e) => onChange("confirmPassword", e)}
              />
            </div>

            {errors.password && (
              <span className="ResetPasswordWrapper__row--error">
                {errors.password}
              </span>
            )}
            {errors.confirmPassword && (
              <span className="ResetPasswordWrapper__row--error">
                {errors.confirmPassword}
              </span>
            )}
            {duplicateError.password && (
              <span className="ResetPasswordWrapper__row--error">
                {duplicateError.password}
              </span>
            )}
            <div className="ResetPasswordWrapper__button">
              <button type="submit">Change Password</button>
            </div>
          </>
        )}
      </form>
    </>
  );
}

export default ResetPassword;
