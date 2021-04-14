import React from "react";
import Card from "./Card";

function Details(props){
    return (
    <div>
        <p className="info">{props.info}</p>
    </div>
    );
}

export default Details;