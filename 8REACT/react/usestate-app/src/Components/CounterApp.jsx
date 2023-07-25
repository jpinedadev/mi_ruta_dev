import React, {useState} from "react"

function CounterApp(){
    const [counter, setCounter] = useState(0);

    const incrementCounter = () =>{
        setCounter(counter+1);
    }

    return(
        <div>
            <button
                onClick={ incrementCounter }>
                Increment
        </button>
        <h1>Clicks: { counter }</h1>
        </div>
        )
}

export default CounterApp
