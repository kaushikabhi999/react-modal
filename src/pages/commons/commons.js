import React from "react";
import Modal from "../../Modal/modal";
export default function commons(props) {

  return (
    <>
      <nav>
        <a href="/">Sign In</a>
        <a href="/">Sign Up</a>
      </nav>
      <Modal isOpen={false} closeButton={true}>
        <form>
          <input />
          <input />
        </form>
      </Modal>
      {props.children}
    </>
  );
}
