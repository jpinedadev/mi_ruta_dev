import React from "react"

function Car(props){
    return(
        <div>
            <h2>I am a {props.brand} </h2>
        </div>
        )
}

function Garage(){
    return(
        <div>
            <h1>Who's live in my garage? (CarGarage)</h1>
            <Car brand="Toyota"/>
        </div>
    )
}

export default Garage;
