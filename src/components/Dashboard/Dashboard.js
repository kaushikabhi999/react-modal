import React, { useState, useEffect } from "react";
import Modal from "../../Modal/Modal";
import LogOut from "../Shared/LogOut";
import { navigate } from "@reach/router"
export default function Dashboard(props) {
  const [isLogout, setLogout] = useState(false);

  function requestLogoutCloseModal() {
    setLogout(!isLogout);
  }
  useEffect(() => {
    if (!props.location.state) {
      navigate(`/login`);
    }
  }, [props.location]);

  return (
    <>
      <div className="heading">
        <h3>
          Welcome to Dashboard{" "}
          {props.location && props.location.state && props.location.state.user}
        </h3>
      </div>
      <nav className="nav">
        <button
          onClick={() => setLogout(!isLogout)}
          className="btn btn-outline-danger"
        >
          Log Out
        </button>
      </nav>
      {isLogout && (
        <Modal
          closeButton
          isOpen={isLogout}
          requestCloseModal={requestLogoutCloseModal}
          style={{ left: "25%" }}
        >
          <LogOut requestLogoutCloseModal={requestLogoutCloseModal} />
        </Modal>
      )}
    </>
  );
}
