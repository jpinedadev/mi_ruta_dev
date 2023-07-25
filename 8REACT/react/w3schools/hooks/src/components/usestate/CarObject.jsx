import React, {useState} from "react"

function CarObject(){
    const [car,setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });


    const updateColor=()=>{
        setCar(previousState => {
            return {...previousState, color:"blue"}
        });
    }

    return(
        <div>
            <h1>My {car.brand}</h1>
            <p>it is a {car.color} {car.model} from {car.year}</p>
            <button
                type="button"
                onClick={updateColor}
            >blue</button>
        </div>
        )
}

export default CarObject
