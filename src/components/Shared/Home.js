import React, { useState } from "react";
import Modal from "../../Modal/Modal";
import SignInForm from "../SignIn/SignInForm";
import SignUpForm from "../SignUp/SignUpForm";

export default function Home(props) {

  const [isSignIn, setSignIn] = useState(false);
  const [isSignUp, setSignUp] = useState(false);

  return (
    <>
      {isSignIn ? <Modal><SignInForm /></Modal> : ''}
      {isSignUp ? <Modal><SignUpForm /></Modal> : ''}
      <div className="heading">
        <h3>Welcome to Custom React Modal Utility</h3>
      </div>
      <nav className="nav">
        <button onClick={() => setSignIn(!isSignIn)} className="btn btn-outline-info" >Sign In</button>
        <button onClick={() => setSignUp(!isSignUp)} className="btn btn-outline-success ml-10">Sign Up</button>
      </nav>
    </>
  );
}
