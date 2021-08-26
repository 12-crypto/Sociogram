import { useContext,useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import {CircularProgress} from "@material-ui/core";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user,isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {

    console.log(email.current.value);
    e.preventDefault();
    loginCall(
      { email:email.current.value, password:password.current.value },
      dispatch
    );
  };
  console.log(user);
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
            <input ref={email} required placeholder="Email" className="loginInput" type="email" />
            <input ref={password} required placeholder="Password" className="loginInput" type="password"  />
            <button className="loginButton" style={{background: '#690183'}}>
              {isFetching ?<CircularProgress color="primary" size="20px" disabled={isFetching}/>:"Log In"}
              </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton" style={{background: 'orange'}}>
            {isFetching ?<CircularProgress color="white" size="20px"/>:
            "Create a New Account"
            }
              </button>
          </form>
        </div>
      </div>
    </div>
  );
}
