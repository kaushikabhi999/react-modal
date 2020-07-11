import React from "react";
import { Link } from "@reach/router";

export default function Dashboard(props) {
  return (
    <>
      <div className="heading">
        <h3>Welcome to Dashboard</h3>
      </div>
      <nav className="nav">
        <Link className="btn btn-outline-danger" to="/">Log Out</Link>
      </nav>
    </>
  );
}
