import React from "react";

export default function Home(props) {
  return (
    <>
      <div className="heading">
        <h3>Welcome to Custom React Modal Utility</h3>
      </div>
      <nav className="nav">
        <a className="btn btn-outline-info" role="button" href="/">Sign In</a>
        <a className="btn btn-outline-success ml-10" role="button" href="/">Sign Up</a>
      </nav>
    </>
  );
}
