import React from 'react';
import Details from "./Details";

function Avatar(props){
    return (<div>
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.emoji}
            </span>
            <span>{props.name}</span>
          </dt>
    </div>
    )}

export default Avatar;