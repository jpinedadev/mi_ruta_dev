import React, {useState} from "react"

function Car(){
    const [brand,setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");
    const [color, setColor] = useState("red");

    return(
        <div>
            <h2>My {brand}</h2>
            <p>it is a {color} {model} from {year}</p>
        </div>
        )
}

export default Car
