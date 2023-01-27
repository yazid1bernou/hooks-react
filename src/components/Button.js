import React from "react";

const randomColour = () => '#'+(Math.random()*0xFFFFFF<<0).toString(16);

function Button (props) {
    return (
        <div>
            <button type="" onClick={props.onClick} style={{background : randomColour }}> Increment</button>
            {props.children}
        </div>
    )
}

export default Button; 