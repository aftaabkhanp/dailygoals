import React from "react";
import "./ErrorModal.css";
function ErrorModal(props) {
  const handleClick = () => {
    props.onClick(true);
  };
  return (
    <>
    <div className="ErrorModal-BackDrop" onClick={handleClick}>
      
    </div>
    <div className="modal">
        <header>
          <p>Oops! Some thing went wrong</p>
        </header>
        <div className="message">
          <p> {props.message}</p>
        </div>
        <footer>
          <button onClick={handleClick}> Okay</button>
        </footer>
      </div>
    </>
  );
}

export default ErrorModal;
