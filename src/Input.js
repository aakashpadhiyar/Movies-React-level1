import { useState } from "react";

export function Input() {
    
    const [ inputValue, setInputValue ] = useState("")

    return (
        <div>
            {inputValue &&
                <h3>{inputValue}</h3>
            }
        
        <input
        value={inputValue} 
        // onChange={ (event) => setInputValue(event.target.value)
        // onChange={ (e) => setInputValue(e.target.value) }
        onChange={ (e) => {
            if(!e.target.value.includes("t")){
                setInputValue(e.target.value)
            }
        }} />
        </div>
    )
}