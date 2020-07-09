import React from "react";

export default function commons(props) {
  return (
    <>
      <nav>
        <a href="/">Sign In</a>
        <a href="/">Sign Up</a>
      </nav>
      {props.children}
    </>
  );
}
