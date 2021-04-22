import React from "react";
import Form from "./Form";

var isLoggedIn = true;

const currentTime = new Date().getHours();

function App() {
  return <div className="container">{
      isLoggedIn ? <h1>Hello</h1> : <Form />  
    }
    {currentTime > 12 &&
    <h2>Why are you still working? Go home and relax :)</h2>}
    </div>;
}

export default App;
