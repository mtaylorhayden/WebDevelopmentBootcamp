import React from 'react';
import Card from './Card';

function Details(props){
    return <div>
            <dd>
                {props.meaning}
          </dd>
    </div>
}

export default Details;