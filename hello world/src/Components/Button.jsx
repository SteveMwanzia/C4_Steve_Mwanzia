import React from "react";

const button = {
    margin: "10px",
    padding: "10px 20px",
    backgroundColor: "grey"
}


const Button = (props) => {
    return (
        <div>
            <button className = "button" style ={button}>{props.label}</button>
        </div>
    )
        
}
export default Button
   
