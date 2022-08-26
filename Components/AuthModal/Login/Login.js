import React from "react";
import "./Login.scss";

export default function Login() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  return (
    <form method="POST" className="LogIn">
      <div className="LogIn__email">
        <div className="LogIn__email--label">Email ID</div>
        <input
          className="LogIn__email--input"
          type="email"
          required
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />
      </div>
      <div className="LogIn__password">
        <label className="LogIn__password--label">Password</label>
        <input
          className="LogIn__password--input"
          type="password"
          required
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
        />
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
