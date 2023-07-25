import React, {useState} from "react"

function ConditionalApp(){
    const [Condition, setCondition]=useState(true);
    return(
        <div>
            <p>Conditional App</p>
            <button
                onClick={()=> setCondition(!Condition)}>
                Toggle
            </button>
            {
                Condition
                    ? <h1>Show message in true</h1>
                    : <h1>Another message in false</h1>
            }
                    <h1>State value is: {Condition.toString()}</h1>
        </div>
        )
}

export default ConditionalApp
