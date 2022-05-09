import React from "react";
import { Link } from "react-router-dom";
import "./extraSignup.css";
const ExtraSignup = () => {
  return (
    <div id="extraSignup">
      <label htmlFor="">Enter Username</label>
      <input type="email" name="" id="" />
      <br />

      <label htmlFor="">Enter Password</label>
      <input type="password" name="" id="" />
      <br />

      <Link to="/home">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default ExtraSignup;
