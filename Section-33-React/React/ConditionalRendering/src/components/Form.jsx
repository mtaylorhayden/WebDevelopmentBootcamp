import React from "react";
import Input from "./Input";

function Form(){
    return(
    <div>
        <form className="form">
            <Input type="text" placeholder="Username"/>
            <Input type="password" placeholder="Password" />
        <button type="submit">Login</button>
        </form>
    </div>
    );
};




export default Form;