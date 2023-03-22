import React,{useState} from "react";
import ErrorModal from "./ErrorModal";
import "./GoalForm.css";
function GoalForm(props) {
  const [inputText, setInputText] = useState("");
  const [isValidForm, setIsValidForm]=useState(true);
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  const handleGoalAdd=()=>{
    if(inputText.length===0)
    {
      setIsValidForm(false);
    }
    else{
    const inputValue={id:"e"+Math.round(Math.random()*100),label:inputText};
    props.getInput(inputValue);
    setInputText("");
    }
  };
  
  return (
    <>
    {!isValidForm && <ErrorModal message="Input cannot be empty." onClick={setIsValidForm}/>}
    
    <div className="GoalForm">
      <form onSubmit={handleFormSubmit}>
        <label>
          <b>Enter Your Goals</b>
        </label>
        <br></br>
        <br></br>
        <input type="text" onChange={handleInputChange} value={inputText} ></input>
        <br></br>
        <br></br>
        <button onClick={handleGoalAdd}>
          <b>Add Goal</b>
        </button>
      </form>
    </div>
    </>
  );
}

export default GoalForm;
