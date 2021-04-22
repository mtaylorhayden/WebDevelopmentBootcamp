import React from "react";
import Card from "./Card";
import emojipedias from "../emojipedia";

function createCard(emojipedia) {
  return (
    <Card 
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}
export function App(){
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">

        {emojipedias.map(emojipedia => <Card       
        key={emojipedia.id}
        emoji={emojipedia.emoji}
        name={emojipedia.name}
        meaning={emojipedia.meaning} />
        )}
        
      </dl>
    </div>
  )
}

export default App;
