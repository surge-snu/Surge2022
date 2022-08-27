import React from "react";
import useAuth from "../../../hooks/useAuth";
import useForm from "../../../hooks/useForm";
import { isEmail, isPassword } from "../../../utils/validate";
import "./Login.scss";

export default function Login({ onLogin }) {
  const { login } = useAuth();
  const initialValues = {
    email: "",
    password: "",
  };

  const [authError, setSetAuthError] = React.useState({});

  function validate(formValues) {
    const errs = {};

    if (!isEmail(formValues.email)) {
      errs.email = "Invalid Email";
    }

    if (!isPassword(formValues.password.trim())) {
      errs.password =
        "Password must have at least one digit, one uppercase & one lowercase letter and min. 8 characters length";
    }
    return errs;
  }

  const { onChange, isSubmitting, handleSubmit, errors } = useForm({
    validate,
    initialValues,
    onSubmit: async (formData) => {
      if (Object.keys(errors).length !== 0) return;
      await login(formData, setSetAuthError).then((res) => {
        if (res.status === 200) {
          onLogin();
        }
      });
    },
    onChangeError: (errors) => {
      console.log(errors);
    },
  });

  return (
    <form method="POST" className="LogIn" onSubmit={handleSubmit}>
      <div className="LogIn__row">
        <label htmlFor="email">Email ID</label>
        <input
          id="email"
          type="email"
          required
          onChange={(e) => onChange("email", e)}
        />
        {errors.email && (
          <span className="LogIn__row--error">{errors.email}</span>
        )}
      </div>
      <div className="LogIn__row">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          required
          onChange={(e) => onChange("password", e)}
        />
        {errors.password && (
          <span className="LogIn__row--error">{errors.password}</span>
        )}
        {authError.message && (
          <span className="LogIn__row--error">{authError.message}</span>
        )}
      </div>
      {/* <div className="LogIn__forgotPassword">
        <a href="#">Forgot Password?</a>
      </div> */}
      <div className="LogIn__button">
        <button type="submit">Log In</button>
      </div>
      <div className="LogIn__signup">
        <div className="LogIn__signup--text">Don't have an account?</div>
        <a href="#signup">SignUp</a>
      </div>
    </form>
  );
}
