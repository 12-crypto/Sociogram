import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router";

export default function Register() {
  const email = useRef();
  const password = useRef();
  const username = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

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
          <form className="loginBox" onSubmit={handleClick}>
            <input ref={username} placeholder="Username" className="loginInput" />
            <input ref={email} placeholder="Email" className="loginInput" />
            <input ref={password} placeholder="Password" className="loginInput" type="password" />
            <input ref={passwordAgain} placeholder="Password Again" className="loginInput" type="password" />
            <button className="loginButton" style={{background : 'orange'}}>Sign Up</button>
            <button className="loginRegisterButton" style={{background : '#690183'}}>
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
