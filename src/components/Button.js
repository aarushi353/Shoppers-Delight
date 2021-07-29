import React from 'react';
import './Button.css';
function Button(props){
    return(
        <button>{props.text}</button>
    )
}

export default Button;