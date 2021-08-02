import React from 'react';
import './Button.css';
function Button(props){
    return(
        <button className="button" onSubmit={submitHandler}>{props.text}</button>
    )
}

export default Button;