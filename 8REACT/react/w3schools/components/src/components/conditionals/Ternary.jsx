import React from "react"

function Ternary(props){
    const isGoal=props.isGoal;
    return(
        <div>
            { isGoal ? 'es gol' : 'no es gol' }
        </div>
        )
}

export default Ternary
