import React, { useState } from "react";
import "./App.css";
import GoalInput from "./GoalInput";
import GoalList from "./GoalList";
import StatusMessage from "./StatusMessage";
const goalsData = [
  { id: "g1", label: "Eat healthy" },
  { id: "g2", label: "Rest for 4 hours" },
  { id: "g3", label: "Practice Coding" },
  { id: "g4", label: "Do exercise" },
  { id: "g5", label: "Relax for 1 hour" },
];
function App() {
  const [data, setData] = useState(goalsData);
  const [showMessage, setShowMessage] = useState();

  const addInput = (newGoal) => {
    setData((prevState) => [newGoal, ...prevState]);
    setShowMessage("Added");
  };
  const handleDelete = (event) => {
    setData(
      data.filter((item) => {
        return item.label !== event;
      })
    );
    setShowMessage("Deleted");
  };
  const handleEdit = (oldlabel, newLabel) => {
    setData(
      data.map((item) => {
        if (item.label === oldlabel) {
          item.label = newLabel;
        }
        return item;
      })
    );
  };
  return (
    <div className="App">
      {showMessage && <StatusMessage message={showMessage} />}
      {showMessage &&
        setTimeout(() => {
          setShowMessage();
        }, 2000)}
      <GoalInput getInput={addInput} />
      <GoalList
        goalsData={data}
        handleDeletes={handleDelete}
        handleEdits={handleEdit}
      />
    </div>
  );
}

export default App;
