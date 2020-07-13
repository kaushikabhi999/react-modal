import React, { useState, useEffect } from "react";
import Modal from "../../Modal/Modal";
import SignInForm from "../SignIn/SignInForm";
import SignUpForm from "../SignUp/SignUpForm";
import { useLocation } from '@reach/router';
import { CLOSE_BUTTON_SVG } from './Constants';

export default function Home() {
  const [isSignIn, setSignIn] = useState(false);
  const [isSignUp, setSignUp] = useState(false);

  let location = useLocation();
  useEffect(() => {
    if (location.pathname === '/login') {
      setSignIn(true);
    }
    if (location.pathname === '/signup') {
      setSignUp(true);
    }
  }, [location.pathname])

  function requestSignInCloseModal() {
    setSignIn(!isSignIn);
  }
  function requestSignUpCloseModal() {
    setSignUp(!isSignUp);
  }

  return (
    <>
      {isSignIn && (
        <Modal
          id="signInModal"
          requestCloseModal={requestSignInCloseModal}
          closeButtonSVG={CLOSE_BUTTON_SVG}
          style={{ maxWidth: '60%', left: '40%' }}
        >
          <SignInForm />
        </Modal>
      )}

      {isSignUp && (
        <Modal
          id="signUpModal"
          requestCloseModal={requestSignUpCloseModal}
          style={{ width: '60%' }}
        >
          <SignUpForm />
        </Modal>
      )
      }
      <div className="heading">
        <h3>Welcome to Custom React Modal Utility</h3>
      </div>
      <nav className="nav">
        <button
          onClick={() => setSignIn(!isSignIn)}
          className="btn btn-outline-info"
        >
          Sign In
        </button>
        <button
          onClick={() => setSignUp(!isSignUp)}
          className="btn btn-outline-success ml-10"
        >
          Sign Up
        </button>
      </nav>
    </>
  );
}
