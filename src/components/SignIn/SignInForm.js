import React from "react";
import { Link } from "@reach/router";
import './SignInForm.css';

export default function SignInForm(props) {
  return (
    <>
      <form>
        <div className="formcontainer">
          <label>Username:</label>
          <input name="username" type="text" />
          <label>Password:</label>
          <input name="password" type="password" />
          <Link className="btn sign-in-btn" to="/dashboard">Sign In</Link>
        </div>
      </form>
    </>
  );
}
