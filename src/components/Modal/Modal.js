import React from "react";
import ReactDOM from "react-dom";

function ModalOverlay({ name, email, message }) {
  return (
    <div className="modal">
      <div className="modal__content">
        <h3>Confirmation message</h3>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Message: {message}</p>

        <p>Your message is sent!</p>
      </div>
    </div>
  );
}

function Modal({ name, email, message }) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay name={name} email={email} message={message} />,
        document.getElementById("modal-overlay")
      )}
    </React.Fragment>
  );
}

export default Modal;
