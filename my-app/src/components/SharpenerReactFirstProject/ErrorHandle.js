import React from "react";
import './UserForm.css';
const ErrorHandle=props=>{
return(
    <div>

    <div onClick={props.onCancel} />
    <header>
        <h2>{props.title}</h2>
    
    <div>
        <p>{props.message}</p>
    </div>
    <footer>
        <button className="button" type="submit" onClick={props.onCancel}>Okay</button>
    </footer>
    </header>
    </div>
);
};
export default ErrorHandle;