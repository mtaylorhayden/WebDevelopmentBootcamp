import React from 'react';
import Avatar from './Avatar';
import Details from './Details';

function Card(props){
    return( <div className="term">
        <Avatar 
            emoji={props.emoji}
            name={props.name}
            
        />
        <Details meaning={props.meaning}/>
    </div>
    )}


export default Card;