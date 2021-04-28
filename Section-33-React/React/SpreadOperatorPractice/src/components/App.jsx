import React from "react";
import ListItem from "./ListItem";

function App() {

  // we keep the state of the input in here
  const [input, setInput] = React.useState("");

  
  // and update the list down here with the state of the input?
  const [listItem, setListItem] = React.useState([]);



  function handleChange(event){
    const value = event.target.value;
    setInput(value);
  }

  function handleClick(event){
    console.log(listItem);
    setListItem((prevValue => [
      ...prevValue, 
      input
    ]))
      //{listItem.map((item) => <li>{item}</li>)}
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} name="listInput" value={input} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {listItem.map((item) => {
          return <li>{item}</li>
         })}
        </ul>
      </div>
    </div>
  );
}

export default App;
