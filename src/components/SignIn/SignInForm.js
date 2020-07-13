import React from "react";
import { navigate } from "@reach/router";
import './SignInForm.css';

export default function SignInForm(props) {
  return (
    <form onSubmit={e => { e.preventDefault(); navigate(`/dashboard`); }}>
      <div className="form-wrapper">
        <label>Username:</label>
        <input required name="username" type="text" />
        <label>Password:</label>
        <input required name="password" type="password" />
        <button className="btn sign-in-btn" type="submit">Sign In</button>
      </div>
    </form>
  );
}
