import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Emojipedia from "./emojipedia";

const results = [];

const result = Emojipedia.map(function(x){
    
    results.push(x.meaning.substring(0,100));
})

console.log(result);

ReactDOM.render(<App />, document.getElementById("root"));
