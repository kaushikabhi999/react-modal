import React from "react";
import { navigate } from "@reach/router";

export default function LogOut() {
  function logOut() {
    navigate(`/`);
  }
  return (
    <div style={{ textAlign: 'center', margin: '20px 50px' }}>
      <h3>Are you sure?</h3>
      <div style={{ display: 'flex' }}>
        <button className="btn sign-in-btn">No</button>
        <button className="btn sign-in-btn" style={{ marginLeft: '50px' }} onClick={() => logOut()}>Yes</button>
      </div>
    </div >
  );
}
