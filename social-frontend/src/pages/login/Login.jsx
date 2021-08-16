import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo" style={{color: '#690183',fontSize:'8vh'}}>Sociogram</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Sociogram.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton" style={{background: '#690183'}}>Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton" style={{background: 'orange'}}>
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
