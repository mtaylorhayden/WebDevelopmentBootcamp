import React, { useState } from "react";

function App() {

  const [headingText, setHeadingText] = useState("Hellooo");

  const [isMousedOver, setMouseOver] = useState(false)

  function handleClick(){
    setHeadingText("Submitted");
  }

  function mouseOut(){
    setMouseOver(false);
  }

  function mouseOver(){
    setMouseOver(true);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor: isMousedOver ? "black" : "white"}} 
        onMouseOut={mouseOut} onMouseOver={mouseOver} onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
