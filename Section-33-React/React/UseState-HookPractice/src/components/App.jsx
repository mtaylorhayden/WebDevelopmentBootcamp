import React from "react";



function App() {

  let now = new Date().toLocaleTimeString();
  const [initialState, setState] = React.useState(now);
  
  console.log(initialState);

  function GetTime(){
    now = new Date().toLocaleTimeString();
    setState(now);
  }

  setInterval(GetTime, 1000);


  return (
    <div className="container">
      <h1>{initialState}</h1>
      <button onClick={GetTime}>Get Time</button>
    </div>
  );
}

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);

export default App;
