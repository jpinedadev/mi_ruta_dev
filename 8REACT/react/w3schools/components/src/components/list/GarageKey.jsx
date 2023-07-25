import React from "react"

function Car(props){
    return <li>{props.key} {props.brand}</li>
}

function GarageKey(){
    const cars = [
        {id:1, brand:'Ford'},
        {id:2, brand:'BWM'},
        {id:3, brand:'Audi'}
    ]
    return(
        <div>
            <ul>
                { cars.map(car=> <Car  key={car.id} brand={car.brand}/>) }
            </ul>
        </div>
        )
}

export default GarageKey
