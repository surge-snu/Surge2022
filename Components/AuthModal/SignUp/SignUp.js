import "./SignUp.scss";
import React from "react";
import useForm from "../../../hooks/useForm";
import { isEmail, isPassword, isUsername } from "../../../utils/validate";

// export async function getServerSideProps() {
//   return {
//     props: "allFoods",
//   };
// }

export default function SignUp() {
  const initialValues = {
    friendlyName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

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
      console.log(formData);
    },
    onChangeError: (errors) => {
      console.log(errors);
    },
  });

  return (
    <form method="POST" className="SignUp" onSubmit={handleSubmit}>
      <div className="SignUp__name">
        <div className="SignUp__name--label">Name</div>
        <input
          className="SignUp__name--input"
          type="text"
          required
          onChange={(e) => onChange("friendlyName", e)}
        />
      </div>
      <div className="SignUp__email">
        <div className="SignUp__email--label">Email ID</div>
        <input
          className="SignUp__email--input"
          type="email"
          required
          onChange={(e) => onChange("email", e)}
        />
      </div>
      <div className="SignUp__password">
        <div className="SignUp__password--first">
          <div className="SignUp__password--first__label">Password</div>
          <input
            className="SignUp__password--first__input"
            type="password"
            required
            onChange={(e) => onChange("password", e)}
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
            onChange={(e) => onChange("confirmPassword", e)}
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
        <button type="submit">Sign Up</button>
      </div>
      <div className="SignUp__login">
        <div className="SignUp__login--text">Already have an account?</div>
        <a href="#login">LogIn</a>
      </div>
    </form>
  );
}
