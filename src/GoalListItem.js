import React, { useState } from "react";
import "./GoalListItem.css";
function GoalListItem(props) {
  const [ischecked, setIsChecked] = useState(true);
  const [checkName, setCheckName] = useState("fa-solid fa-square");
  const [strike, setStrike] = useState("none");
  const [editing, setEditing] = useState(false);
  const [label, setLabel] = useState(props.label);
  const handleDelete = () => {
    props.onDelete(props.label);
  };
  const handleClick = () => {
    if (!ischecked) {
      setCheckName("fa-solid fa-square");
      setStrike("none");
    } else {
      setCheckName("fa-solid fa-square-check");
      setStrike("line-through");
    }
    setIsChecked((prev) => !prev);
  };
  const handleEdit = () => {
    setEditing(!editing);
    setLabel(props.label);
  };
  const handleSave = () => {
    setEditing(!editing);
    props.onEdit(props.label, label);
  };
  const handleInputLabel = (event) => {
    setLabel(event.target.value);
  };
  return (
    <div className="GoalListItem">
      <div className="checkarea">
        <i class={checkName} onClick={handleClick}></i>
        {!editing ? (
          <h3 style={{ textDecoration: strike }}>{props.label}</h3>
        ) : (
          <input type="text" value={label} autoFocus onChange={handleInputLabel}></input>
        )}
        {(editing)&& <i class="fa-solid fa-rectangle-xmark" onClick={handleEdit}></i>}
        
      </div>

      {!editing ? (
        <i class="fa-solid fa-pen-to-square" onClick={handleEdit}></i>
      ) : (
        <i class="fa-solid fa-floppy-disk" onClick={handleSave}></i>
      )}

      <button onClick={handleDelete}>
        <i className="fa fa-trash-o"></i>
      </button>
    </div>
  );
}

export default GoalListItem;
