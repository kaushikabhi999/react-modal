import React, { useEffect, useState, createRef } from "react";
import "./Modal.css";
import CloseButton from "./close.svg";
const ReactDOM = require("react-dom");

export default function Modal(props) {
  const inputElements = createRef();
  const closeButtonRef = createRef();
  const createFirstRef = createRef();

  const [isCloseFocused, setIsCloseFocused] = useState(null);
  const KeyPressedDown = KeyListenerDown();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
    return () => {
      document.body.style.overflow = null;
      document.body.style.height = null;
    };
  });
  useEffect(() => {
    const focusableModalElements = inputElements.current.querySelectorAll(
      "a[href], button, textarea, input, select"
    );
    let tabIndex = 1;
    focusableModalElements[0].focus();
    for (const i of focusableModalElements) {
      i.tabIndex = tabIndex++;
    }
    closeButtonRef.current.tabIndex = tabIndex;
  }, []);

  useEffect(() => {
    if (KeyPressedDown[0] === 27) {
      //for escape//
      requestCloseModal();
    } else if (KeyPressedDown[0] === "Shift+TAB") {
      // SHIFT + TAB //
      const focusableModalElements = inputElements.current.querySelectorAll(
        "a[href], button, textarea, input, select"
      );
      if (isCloseFocused) {
        setIsCloseFocused(false);
      }
      createFirstRef.current = focusableModalElements[0];
      if (
        document.activeElement === ReactDOM.findDOMNode(createFirstRef.current)
      ) {
        closeButtonRef.current.focus();
        setIsCloseFocused(true);
      }
    } else if (KeyPressedDown[0] === 9 && isCloseFocused) {
      // for TAB //
      const focusableModalElements = inputElements.current.querySelectorAll(
        "a[href], button, textarea, input, select"
      );
      focusableModalElements[0].focus();
      setIsCloseFocused(false);
    }
  }, [KeyPressedDown]);

  const { width, height, requestCloseModal,closeButtonSVG } = props;
  
  return (
    <dialog className="modal-wrapper-parent" open>
      <dialog
        open
        className="modal-wrapper"
        style={{
          minWidth: width ? width : "",
          minHeight: height ? height : "",
        }}
      >
        <div className="close-button-wrapper">
          <button
            ref={closeButtonRef}
            onClick={() => requestCloseModal()}
            className="close-button"
            onFocus={() => setIsCloseFocused(true)}
          >
            
            {closeButtonSVG ? closeButtonSVG :<img alt="close-button" src={CloseButton} /> }
          </button>
        </div>
        <div ref={inputElements}>{props.children}</div>
      </dialog>
    </dialog>
  );
}

function KeyListenerDown() {
  const [keyPressed, setKeyPressed] = useState([]);
  function keyListener(e) {
    if (e.shiftKey && e.keyCode === 9) {
      setKeyPressed(["Shift+TAB"]);
    }
    setKeyPressed([e.keyCode]);
  }
  useEffect(() => {
    document.addEventListener("keydown", keyListener);
    return () => document.removeEventListener("keydown", keyListener);
  });

  return keyPressed;
}
