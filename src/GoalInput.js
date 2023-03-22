import React from "react";
import GoalForm from "./GoalForm";
import "./GoalInput.css";
function GoalInput(props) {
  return (
    <div className="GoalInput">
      <GoalForm getInput={props.getInput} />
    </div>
  );
}

export default GoalInput;
