import React, { useState } from "react";
import Modal from "../../Modal/Modal";
import LogOut from "../Shared/LogOut";

export default function Dashboard(props) {
  const [isLogout, setLogout] = useState(false);

  function requestLogoutCloseModal() {
    setLogout(!isLogout);
  }

  return (
    <>
      <div className="heading">
        <h3>Welcome to Dashboard</h3>
      </div>
      <nav className="nav">
        <button onClick={() => setLogout(!isLogout)} className="btn btn-outline-danger">Log Out</button>
      </nav>
      <Modal
        closeButton
        isOpen={isLogout}
        requestCloseModal={requestLogoutCloseModal}
      >
        <LogOut requestLogoutCloseModal={requestLogoutCloseModal}/>
      </Modal>
    </>
  );
}
