import React from "react"

function Car(props){
    return <li>I'm a { props.brand }</li>
}

function GarageMap(){
    const cars = ['Ford', 'BMW', 'Audi']

    return(
        <div>
            <h3>Who lives in my garage?</h3>
            <ul>
                {cars.map((car)=> <Car brand={ car }/>)}
            </ul>
        </div>
        )
}

export default GarageMap
