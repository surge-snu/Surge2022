import "./Login.scss";
export default function Login() {
  return (
    <div className="LogIn">
      <div className="LogIn__email">
        <div className="LogIn__email--label">Email ID</div>
        <input className="LogIn__email--input" type="email" required />
      </div>
      <div className="LogIn__password">
        <div className="LogIn__password--label">Password</div>
        <input className="LogIn__password--input" type="password" required />
      </div>
      <div className="LogIn__forgotPassword">
        <a href="#">Forgot Password?</a>
      </div>
      <div className="LogIn__button">
        <button type="submit">Log In</button>
      </div>
      <div className="LogIn__signup">
        <div className="LogIn__signup--text">Don't have an account?</div>
        <a href="#signup">SignUp</a>
      </div>
    </div>
  );
}
