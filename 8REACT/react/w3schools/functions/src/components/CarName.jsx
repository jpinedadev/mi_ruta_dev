import React from "react"

function Car(props){
    return(
        <div>
            <h2>Im a {props.brand}</h2>
        </div>
        )
}
function Garage2(){
    const carName = "BMW";
    return(        <div>
            <h1>Who's live in my garage? (carName)</h1>
            <Car brand={carName}/>
        </div>
    )
}

export default Garage2;
