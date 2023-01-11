// Code Keypad Component Here
import React from "react";
function Keypad (){
    function keypad (){
        console.log('Entering password...');
    }
    return (
        <div>
           <input type='password' onChange={keypad}></input>  
        </div>
    )
}

export default Keypad;