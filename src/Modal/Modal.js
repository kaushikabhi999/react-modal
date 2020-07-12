import React, { useEffect } from "react";
import "./Modal.css";
import CloseButton from "./close.svg";

export default function Modal(props) {

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
    return () => {
      document.body.style.overflow = null;
      document.body.style.height = null;
    };
  });
  const { isOpen, width, height, closeButton, requestCloseModal, overlay } = props;
  return (
    <>
      <div className="overlay" style={{ display: isOpen && overlay ? 'block' : 'none' }}></div>
      <div
        className="modal-wrapper"
        hidden={!isOpen}
        style={{
          minWidth: width ? width : "",
          minHeight: height ? height : "",
        }}
      >
        <div className="close-button-wrapper" hidden={closeButton ? false : true}>
          <button onClick={() => requestCloseModal(!isOpen)} className="close-button">
            <img alt="close-button" src={CloseButton} />
          </button>
        </div>
        {props.children}
      </div>
    </>
  );
}
