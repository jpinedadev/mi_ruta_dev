import React from "react"

function Car(props){
    return(
        <div>
            <h2>I am a { props.brand.brand }, model { props.brand.model }</h2>
        </div>
        )
}

function Garage3(){
    const carInfo = { brand:"Ford", model:"Mustang" };
    return(
        <div>
            <h1>Who's live in my garage? (carInfo)</h1>
            <Car brand={ carInfo }/>
        </div>
    )
}

export default Garage3;
