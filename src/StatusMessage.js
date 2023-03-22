import React from "react";
import ReactDOM from "react-dom";
import "./StatusMessage.css";
function Message(props) {
  return (
    <div className="StatusMessage">
      <i className="fa fa-check"></i>
     <b> Goal Successfully {props.message}.</b>
    </div>
  );
}
export default function StatusMessage(props) {
  return ReactDOM.createPortal(
    <Message message={props.message} />,
    document.getElementById("portal")
  );
}
