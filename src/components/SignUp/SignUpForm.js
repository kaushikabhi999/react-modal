import React from "react";
import { navigate } from "@reach/router";
import './SignUpForm.css';

export default function SignUpForm() {
  return (
    <>
      <form onSubmit={e => { e.preventDefault(); navigate(`/dashboard`); }}>
        <div className="form-wrapper">
          <label>First name:</label>
          <input name="first_name" type="text" />
          <label>Last name:</label>
          <input name="last_name" type="text" />
          <label>Email:</label>
          <input name="email" type="email" />
          <label>Phone:</label>
          <input name="phone" type="number" />
          <label>Username:</label>
          <input name="username" type="text" />
          <label>Password:</label>
          <input name="password" type="password" />
          <button className="btn sign-up-btn" type="submit">Sign Up</button>
        </div>
      </form>
    </>
  );
}
