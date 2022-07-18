import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";

const Login = () => {
  const login = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="container">
        <button onClick={login}>Login with Google</button>
      </div>
    </div>
  );
};

export default Login;
