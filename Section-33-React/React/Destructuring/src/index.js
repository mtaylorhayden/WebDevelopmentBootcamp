// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";
import animals from "./data";


const [cat, dog] = animals;
console.log(cat, dog);

const {name, sound} = cat;

const o = {p: 42, q: true};
const {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true
console.log(o.p);

// const tesla = {model: cars[0].model, topColour: cars[0].coloursByPopularity[0]};
// const teslaTopSpeed = cars[0].speedStats.topSpeed;

// const honda = {model: cars[1].model};
// const hondaTopSpeed = cars[1].speedStats.topSpeed;
// const hondaTopColour = cars[1].coloursByPopularity[0];

// console.log(tesla);
// console.log(teslaTopSpeed);


const [honda, tesla] = cars;

const {speedStats: {hondaTopSpeed}} = honda;

const {topColour: {hondaTopColour}} = honda;

const {speedStats: {teslaTopSpeed}} = tesla;

const {topColour :{teslaTopColour}} = tesla;


ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <h2>Most Popular Colour</h2>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{tesla.topColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr> 
  </table>,
  document.getElementById("root")
);


// you have to have an object called tesla
// and a property called topColour
// which is only one of the colors in the tesla object
