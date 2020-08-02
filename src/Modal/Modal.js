/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, createRef } from "react";
import "./Modal.css";
import CloseButton from "./close.svg";
const ReactDOM = require("react-dom");

export default function Modal(props) {
  const inputElements = createRef();
  const closeButtonRef = createRef();
  const createFirstRef = createRef();

  const [isCloseFocused, setIsCloseFocused] = useState(false);
  const [previousFocused, setPreviousFocused] = useState('');
  const KeyPressedUp = KeyListenerUp();

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
    if (KeyPressedUp[0] === 27) {
      requestCloseModal();
    } else if (KeyPressedUp[0] === "Shift+TAB") {
      const focusableModalElements = inputElements.current.querySelectorAll(
        "a[href], button, textarea, input, select"
      );
      if (isCloseFocused) {
        setIsCloseFocused(false);
      }
      createFirstRef.current = focusableModalElements[0];
      if (
        previousFocused === ReactDOM.findDOMNode(createFirstRef.current)
      ) {
        console.log('previousFocused');
      }
      setPreviousFocused(document.activeElement);
    } else if (KeyPressedUp[0] === 9) {
      const focusableModalElements = inputElements.current.querySelectorAll(
        "a[href], button, textarea, input, select"
      );
      if (isCloseFocused && document.activeElement !== ReactDOM.findDOMNode(closeButtonRef.current)) {
        focusableModalElements[0].focus();
        setIsCloseFocused(false);
      }
      if (
        document.activeElement === ReactDOM.findDOMNode(closeButtonRef.current)
      ) {
        setIsCloseFocused(true);
      }
      setPreviousFocused(document.activeElement);
    } else {
      setPreviousFocused(document.activeElement);
    }
  }, [KeyPressedUp]);

  const { id, style, requestCloseModal, closeButtonSVG } = props;
  return (
    <>
      <dialog className="modal-wrapper-parent" onClick={() => requestCloseModal()} open>
      </dialog>
      <dialog
        id={id}
        open
        className="modal-wrapper"
        style={style}
      >
        <div className="close-button-wrapper">
          <button
            ref={closeButtonRef}
            onClick={() => requestCloseModal()}
            className="close-button"
            aria-label="close-button"
            onFocus={() => setIsCloseFocused(true)}
          >
            {closeButtonSVG ? closeButtonSVG : <img alt="close-button" src={CloseButton} />}
          </button>
        </div>
        <div ref={inputElements}>{props.children}</div>
      </dialog>
    </>
  );
}

function KeyListenerUp() {
  const [keyPressed, setKeyPressed] = useState([]);
  function keyListener(e) {
    if (e.shiftKey && e.keyCode === 9) {
      setKeyPressed(["Shift+TAB"]);
    } else if (!e.shiftKey) {
      setKeyPressed([e.keyCode]);
    }
  }
  useEffect(() => {
    document.addEventListener("keydown", keyListener);
    return () => {
      document.removeEventListener("keydown", keyListener);
    };
  });

  return keyPressed;
}
