import React from "react"
import Car from "./Car"

function Garage(props){

    const cars = props.cars;

    /*<h1>Garage</h1>
            {cars.length > 0 &&
                <h2>
                    You have {cars.length} cars in your garage.
                </h2>
                }*/
    return(
        <div>
            
            <h1>Who lives in my garage?</h1>
            <ul>
                {cars.map((car)=> <Car key={car.id} brand={car.brand}/>)}
            </ul>

        </div>
        )
}

export default Garage
