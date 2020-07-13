import React, { useState } from "react";
import Modal from "../../Modal/Modal";
import SignInForm from "../SignIn/SignInForm";
import SignUpForm from "../SignUp/SignUpForm";

export default function Home() {
  const [isSignIn, setSignIn] = useState(false);
  const [isSignUp, setSignUp] = useState(false);

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
          requestCloseModal={requestSignInCloseModal}
          closeButtonSVG={CLOSE_BUTTON_SVG}
        >
          <SignInForm />
        </Modal>
      )}

      {isSignUp && (
        <Modal requestCloseModal={requestSignUpCloseModal}>
          <SignUpForm />
        </Modal>
      )}
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
const CLOSE_BUTTON_SVG =  (
  <svg version="1.1" x="0px" y="0px" viewBox="0 0 512 512" height="10px" width="10px">
    <path
      style={{fill:"#FF3636"}}
      d="M256,0C115.3,0,0,115.3,0,256s115.3,256,256,256s256-115.3,256-256S396.7,0,256,0z"
    />
    <path
      style={{fill:"#F40000"}}
      d="M512,256c0,140.7-115.3,256-256,256V0C396.7,0,512,115.3,512,256z"
    />
    <polygon
      style={{fill:"#E7E7E7"}}
      points="298.299,256 383.2,340.901 340.901,383.2 256,298.299 171.099,383.2 128.8,340.901 
213.701,256 128.8,171.099 171.099,128.8 256,213.701 340.901,128.8 383.2,171.099 "
    />
    <polygon
      style={{fill:"#D3D3D8"}}
      points="298.299,256 383.2,340.901 340.901,383.2 256,298.299 256,213.701 340.901,128.8 
383.2,171.099 "
    />
  </svg>
);
