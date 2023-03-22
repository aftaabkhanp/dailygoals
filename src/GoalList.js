import React from "react";
import GoalListItem from "./GoalListItem";
import "./GoalList.css";

function GoalList(props) {
  
  return (
    <div className="GoalList">
      {props.goalsData.map((item) => (
        <GoalListItem
          label={item.label}
          key={item.id}
          onDelete={props.handleDeletes}
          onEdit={props.handleEdits}
        />
      ))}
    </div>
  );
}

export default GoalList;
