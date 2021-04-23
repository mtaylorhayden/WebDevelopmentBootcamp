import React, {useState} from "react";

function App() {


  const [count, setCount] = useState(0)

  console.log(count);

  function increase() {
    setCount(count + 1);
  };

  function decrease() {
    setCount(count - 1);
  };


return(
  <div className="container">
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>

  </div>
  );
}





  /////////////// Destructuring Example ///////////////

  // this is bad
  const rgb = [9, 132, 227];

  console.log(rgb[0]);


  // this is better
  const [red, green, blue] = [9, 132, 227];

  console.log(blue);

  /////////////// Destructuring Example ///////////////


export default App;